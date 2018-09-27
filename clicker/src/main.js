import Vue from 'vue'
import './plugins/vuetify'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import router from "./router/router"
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueRouter)

/* Vuex Initialization*/
const store = new Vuex.Store({
  state:{
    numberOfClicks:0,
  },
  mutations:{
    increaseNumberOfClicks(state){
      state.numberOfClicks++;
    }
  },
  actions:{

  },
  getters:{

  }

})

/* Initialization of Vue App*/
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
