import Vue from 'vue'
import Vuex from 'vuex'
// import api from '@/services/api'

Vue.use(Vuex)

const itemsModule = {
    namespaced: true,
    state: {

    },
    getters: {

    },
    mutations: {

    },
    actions: {
    }
}


const store = new Vuex.Store({
    modules: {
        item: itemsModule
    }
})

export default store