<template>
    <v-navigation-drawer app clipped fixed>
        <h2 class="mt-3 ml-3 grey--text"><v-icon>fas fa-shopping-cart</v-icon> Knuckles Shop</h2>
        <v-list dense>

            <v-list-tile @click="buySoldier()">
                <v-list-tile-action>
                    <v-icon >add_circle_outline</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Buy Soldier</v-list-tile-title>
                    <v-list-tile-sub-title> # {{soldier}} | Price: {{this.$store.state.soldier.price}} | CPS: {{this.$store.state.soldier.cps}}</v-list-tile-sub-title>

                </v-list-tile-content>
            </v-list-tile>

            <v-list-tile @click="buyBigBrother()">
                <v-list-tile-action>
                    <v-icon >add_circle_outline</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Buy Big Brother</v-list-tile-title>
                    <v-list-tile-sub-title> # {{bigBrother}} | Price: {{this.$store.state.bigBrother.price}} | CPS: {{this.$store.state.bigBrother.cps}}</v-list-tile-sub-title>
                </v-list-tile-content>
            </v-list-tile>
         
            
        </v-list>
        

    </v-navigation-drawer>
</template>

<script>
export default {
    name:"sideBar",
    methods:{
        buySoldier:function(){
            if(this.$store.state.clicks >= this.$store.state.soldier.price){          
                this.$store.commit("buySoldier")
            }
        },
        buyBigBrother:function(){
            if(this.$store.state.clicks >= this.$store.state.bigBrother.price){          
                this.$store.commit("buyBigBrother")
            }
        }
    },
    computed:{
        clicks(){
            return this.$store.state.clicks
        },
        soldier(){
            return this.$store.state.soldier.amount
        },
        bigBrother(){
            return this.$store.state.bigBrother.amount
        }
    }
}
</script>
<style scoped>

</style>
