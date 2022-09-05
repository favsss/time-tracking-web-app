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
    getUser: state => { return state.user }
};

const actions = {
    login({ commit }, credentials) {
        console.log(credentials);

        commit()
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