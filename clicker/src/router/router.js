import Router from 'vue-router'
import MainView from "@/components/mainView"
import ShopSideBar from "@/components/shopSideBar"

export default new Router({
    routes:[
        {
            path: '/',
            name: 'Home',
            components:{
                sideView:ShopSideBar,
                mainView:MainView
            }
        }
    ]
})