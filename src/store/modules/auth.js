import axios from 'axios';

const state = {
    token: null,
    user: {
        username: '',
        id: null,
        type: ''
    }
}

const getters = {
    getToken: state => { return state.token },
    getUser: state => { return state.user },
    IsAuthenticated: state => { return state.token !== null; }
};

const actions = {
    async login({ commit }, credentials) {
        console.log(credentials);
        const params = new URLSearchParams();
        params.append("username", credentials.username);
        params.append("password", credentials.password);

        const response = await axios.post("https://ec2-35-89-178-233.us-west-2.compute.amazonaws.com:8080/token", params)
        const { access_token } = response.data

        commit('SET_TOKEN', access_token);
    },
    logout({ commit }) {
        commit('SET_TOKEN', null);
    }
};

const mutations = {
    SET_TOKEN: (state, token) => (state.token = token)
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};