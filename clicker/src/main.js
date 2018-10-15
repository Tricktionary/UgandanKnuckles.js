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
    drawer:null,
    clicks:0,
    clicksPerSecond:0,
    soldier:{
      amount:0,
      price:5,
      cps:1,
      priceIncrease:10,
    },
    bigBrother:{
      amount:0,
      price:10,
      cps:3,
      priceIncrease:15,
    },
    tank:{
      amount:0,
      price:30,
      cps:7,
      priceIncrease:20,
    },
    russianKnuckles:{
      amount:0,
      price:40,
      cps:15,
      priceIncrease:25,      
    }
  },
  mutations:{
    toggleDrawer(state){
      state.drawer = !state.drawer;
    },
    increaseNumberOfClicksPerSecond(state){
      state.clicks+=state.clicksPerSecond;
    },
    increaseNumberOfClicks(state){
      state.clicks++;
    },
    buySoldier(state){
      state.clicks-=state.soldier.price;
      state.soldier.amount++;
      state.soldier.price+=state.soldier.priceIncrease;
      state.clicksPerSecond+=state.soldier.cps;
    },
    buyBigBrother(state){
      state.clicks-=state.bigBrother.price,
      state.bigBrother.amount++;
      state.bigBrother.price+=state.bigBrother.priceIncrease;
      state.clicksPerSecond+=state.bigBrother.cps;
    },
    buyTank(state){
      state.clicks-=state.tank.price,
      state.tank.amount++;
      state.tank.price+=state.tank.priceIncrease;
      state.clicksPerSecond+=state.tank.cps;
    },
    buyRussianKnuckles(state){
      state.clicks-=state.russianKnuckles.price,
      state.russianKnuckles.amount++;
      state.russianKnuckles.price+=state.russianKnuckles.priceIncrease;
      state.clicksPerSecond+=state.russianKnuckles.cps;
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
