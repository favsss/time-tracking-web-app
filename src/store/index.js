import Vuex from 'vuex';
import Vue from 'vue';
import checkin from './modules/checkin';
import auth from './modules/auth';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        checkin,
        auth
    }
});