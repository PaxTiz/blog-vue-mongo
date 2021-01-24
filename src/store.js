import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        user: {},
        token: "",
        isAuth: false
    },
    mutations: {
        login (state, payload) {
            state.user = payload.user
            state.token = payload.token
            state.isAuth = true
        }
    }
})

export default store
