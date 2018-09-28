<template>
    <v-container>
        <div class="text-xs-center login-box">
            <h1>UgandanKnucles.js</h1>
            <h4>Number of clicks : {{clicks}}</h4>
            <v-btn @click="increaseClicks()" large color="error" >Click</v-btn>
        </div>
    </v-container>
</template>
<script>
export default {
    name:'mainView',
    data(){
        return{
            increaseClicks:function(){
                this.$store.commit("increaseNumberOfClicks")
            }
        }
    },
    methods:{

    },
    computed:{
        clicks(){
            return this.$store.state.clicks
        }
    }
    
}
</script>
<style scoped>
    .login-box{
        position: absolute;
        top:40%;
        left: 38%;
    }
</style>
