<template>
    <v-container>
        <div class="text-xs-center login-box">
            <h1>UgandanKnucles.js</h1>
            <h4>Number of clicks : {{clicks}}</h4>
            <h4>Clicks per second : {{clicksPerSecond}}</h4>
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
    mounted(){
        this.incrementPerSecond();
    },
    methods:{
        incrementPerSecond:function(){
            this.$store.commit("increaseNumberOfClicksPerSecond")
            setTimeout(this.incrementPerSecond,2000)
        }
    },
    computed:{
        clicks(){
            return this.$store.state.clicks
        },
        clicksPerSecond(){
            return this.$store.state.clicksPerSecond
        }
    }
}
function yourFunction(){
    // do whatever you like here

    setTimeout(yourFunction, 5000);
}

yourFunction();
</script>
<style scoped>
    .login-box{
        position: absolute;
        top:40%;
        left: 38%;
    }
</style>
