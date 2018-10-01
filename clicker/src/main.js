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
    clicksPerSecond:0,
    soldier:{
      amount:0,
      price:5,
      cps:1
    },
    bigBrother:{
      amount:0,
      price:10,
      cps:3,
    }
  },
  mutations:{
    increaseNumberOfClicksPerSecond(state){
      state.clicks+=state.clicksPerSecond;
    },
    increaseNumberOfClicks(state){
      state.clicks++;
    },
    buySoldier(state){
      state.clicks-=state.soldier.price;
      state.soldier.amount++;
      state.soldier.price+=1;
      state.clicksPerSecond+=state.soldier.cps;
    },
    buyBigBrother(state){
      state.clicks-=state.bigBrother.price,
      state.bigBrother.amount++;
      state.bigBrother.price+=3;
      state.clicksPerSecond+=state.bigBrother.cps;
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
