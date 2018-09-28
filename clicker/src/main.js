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
    clicks:0,
    numSoldier:0,
    clicksPerSecond:0,
  },
  mutations:{
    increaseNumberOfClicksPerSecond(state){
      state.clicks+=state.clicksPerSecond;
    },
    increaseNumberOfClicks(state){
      state.clicks++;
    },
    buySoldier(state){
      state.clicks-=5;
      state.numSoldier++;
      state.clicksPerSecond+=1;
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
