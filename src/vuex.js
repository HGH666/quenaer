import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        indexData:'',
        swiperList: '',
        iconList: '',
        recommendList: '',
        weekendList: '',
        cityData: '',
        myJson: '',
        detailData: ''
    },
    mutations: {
        indexData(state,val){
            state.indexData=val
            state.swiperList =state.indexData.swiperList
            state.iconList =state.indexData.iconList
            state.recommendList =state.indexData.recommendList
            state.weekendList =state.indexData.weekendList
        },
        swiperList(state, val) {
            state.swiperList = val
        },
        iconList(state, val) {
            state.iconList = val
        },
        recommendList(state, val) {
            state.recommendList = val
        },
        weekendList(state, val) {
            state.weekendList = val
        },
        cityData(state, val) {
            state.cityData = val
            console.log(state.cityData)
        },
        detailData(state, val) {
            state.detailData = val
            console.log(state.detailData)
        },
        myJson(state, val) {
            state.myJson = val
        },
    },
    actions,
})
