import axios from 'axios';

const state = {
    checkins: []
};

const getters = {
    allCheckins: (state) => state.checkins,
    getChartDataByTag (state) {
        const checkins = state.checkins;
        let helper = {};
        let result = checkins.reduce((prev, curr) => {
            const key = curr['tag'];
            if (!helper[key]) {
                helper[key] = {
                    "name" : curr["tag"],
                    "hours" : curr["hours"]
                };
                prev.push(helper[key])
            } else {
                helper[key]["hours"] += curr["hours"];
            }
            
            return prev;
        }, []);

        let labels = [];
        let data = [];
        let backgroundColor = []
        for (let i = 0; i < result.length; ++i) {
            labels.push(result[i]["name"]);
            data.push(result[i]["hours"]);
            const color = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
            backgroundColor.push(color)
        }

        return {
            "labels" : labels,
            "data" : data,
            "backgroundColor" : backgroundColor
        }
    },
    getChartDatabyDate (state) {
      const checkins = state.checkins;
      let sorted_arr = checkins.sort((a, b) => {
        const c = new Date(a.creation_date);
        const d = new Date(b.creation_date);
        return c - d;
      });

      let date_helper = {}
      let res_ = sorted_arr.reduce((p, curr) => {
          const key = curr['creation_date'];
          if (!date_helper[key]) {
              date_helper[key] = {
                  "date" : curr["creation_date"],
                  "hours" : curr["hours"]
              }
              p.push(date_helper[key])
          } else {
              date_helper[key]["hours"] += curr["hours"]
          }
          
          return p;
      }, []);

      let labels = [];
      let data = [];
      for (let i = 0; i < res_.length; ++i) {
        labels.push(res_[i]["date"]);
        data.push(res_[i]["hours"]);
      }

      return {
        "labels" : labels,
        "data" : data
      };
    },
    getChartDataByTagAndDate(state) {
      let checkins = state.checkins;
      let sorted_arr = checkins.sort((a, b) => {
        const c = new Date(a.creation_date);
        const d = new Date(b.creation_date);
        return c - d;
      });

      let helper_ = {} 
      let grouped = sorted_arr.reduce((prev, curr) => {
          const key = curr['creation_date'] + '-' + curr['tag'];
          if (!helper_[key]) {
              helper_[key] = {
                  "date" : curr['creation_date'],
                  "name" : curr["tag"],
                  "hours" : curr["hours"]
              }
              prev.push(helper_[key])
          } else {
              helper_[key]["hours"] += curr["hours"]
          }
          
          return prev;
      }, []);

      let x_axis = []
      let tag_obj = {}
      for (let i = 0; i < grouped.length; ++i) {
          if (x_axis.indexOf(grouped[i]['date']) == -1) {
              x_axis.push(grouped[i]['date'])
              if (i > 0) {
                  // fill the gaps for missing data
                  for (const key_ of Object.keys(tag_obj)) {
                      if (tag_obj[key_].length < x_axis.length - 1) {
                          tag_obj[key_].push(0);
                      }
                  }
              }
          }
          const key = grouped[i]['name'];
          if (!tag_obj[key]) {
              // fill gaps for missing data assuming it has no earlier records
              tag_obj[key] = [];
              for (let j = 0; j < x_axis.length - 1; ++j) {
                tag_obj[key].push(0);
              }
              tag_obj[key].push(grouped[i]['hours'])
          } else {
              tag_obj[key].push(grouped[i]['hours']);
          }
      }

      let dataset = []
      for (const key of Object.keys(tag_obj)) {
          const color = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
          dataset.push({
              "label" : key,
              "data" : tag_obj[key],
              "backgroundColor" : color
          });
      }
      

      return { 
        "labels" : x_axis,
        "data" : dataset
      };

    }
};

const actions = {
    async addCheckin({ commit, rootGetters }, checkin) {
        const token = rootGetters["auth/getToken"];
        const response = await axios.post("https://ec2-35-89-178-233.us-west-2.compute.amazonaws.com:8080/checkins/", checkin, {
          headers: {
            "Authorization" : `Bearer ${token}`
          }
        });

        let data = response.data
        data["creation_date"] = new Date(data["creation_date"]).toLocaleDateString();


        commit('NEW_CHECKIN', data);
    },
    async deleteCheckin({ commit, rootGetters }, id) {
      const token = rootGetters["auth/getToken"];
      if (confirm("Are you sure you want to delete this?")) {
        await axios.delete(`https://ec2-35-89-178-233.us-west-2.compute.amazonaws.com:8080/checkins/${id}`, {
          headers: {
            "Authorization" : `Bearer ${token}`
          }
        });
        commit('REMOVE_CHECKIN', id);
      }
    },
    async fetchCheckins({ commit, rootGetters }) {
      const token = rootGetters["auth/getToken"];

      const response = await axios.get("https://ec2-35-89-178-233.us-west-2.compute.amazonaws.com:8080/checkins", {
        headers: {
          "Authorization" : `Bearer ${token}`
        }
      });

      let checkins = response.data;
      for (let i = 0; i < checkins.length; ++i) {
        checkins[i]["creation_date"] = new Date(checkins[i]["creation_date"]).toLocaleDateString();
      }

      commit('SET_CHECKINS', checkins);
    }
};

const mutations = {
    SET_CHECKINS: (state, checkins) => (state.checkins = checkins),
    NEW_CHECKIN: (state, checkin) => (state.checkins = [checkin, ...state.checkins]),
    REMOVE_CHECKIN: (state, id) => state.checkins = (state.checkins.filter(checkin => checkin.id !== id))
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}