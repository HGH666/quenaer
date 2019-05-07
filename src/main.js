import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/reset.css'
import '@/assets/fonticon/iconfont.js'
import '@/assets/fonticon/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
import store from './vuex.js'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.prototype.$axios = axios
Vue.config.productionTip = false

    new Vue({
    router, store,
    render: h => h(App),
    data:{
        myjson:{}
    },
}).$mount('#app')



refresh()
window.onresize = function () {
    setTimeout(function () {
        refresh()
    }, 10)
}

function refresh() {
    let deviceWidth = document.documentElement.clientWidth
    if (deviceWidth > 1200) {
        document.documentElement.style.fontSize = 1200 / 12 + 'px'
    } else {
        document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px'
    }
}
