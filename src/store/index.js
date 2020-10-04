import Vue from 'vue'
import Vuex from 'vuex'

import { router } from '@/store/module.router'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        router
    }
})