import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/services/api'

Vue.use(Vuex)

const itemModule = {
    namespaced: true,
    state: {
        getURL:'list/books/',
        // postURL:'post/books/',
        postURL:'post/books/',
        updateURL:'update/books/<pk>/',
        deleteURL:'delete/books/<pk>/',
    },
    getters: {
        getURL: state => state.getURL,
        postURL: state => state.postURL,
        updateURL: state => state.updateURL,
        deleteURL: state => state.deleteURL,
    },
    mutations: {

    },
    actions: {
        create(context, payload) {
            var res = api({
                method: 'post',
                url: context.getters.postURL,
                data: {
                    title: payload.title,
                    price: payload.price
                }
            })
            .then(response => {
                return response.data
                
            })
            return res
        },
    }
}


const store = new Vuex.Store({
    modules: {
        item: itemModule
    }
})

export default store