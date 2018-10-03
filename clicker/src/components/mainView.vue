<template class="comic">
    <v-parallax
        src="https://i.kym-cdn.com/photos/images/original/001/332/657/ed6.png"
        dark
        height="1000"
    >
        <div class="text-xs-center login-box comic">
            <h1>UgandanKnucles.js</h1>
            <h4>Number of clicks : {{clicks}}</h4>
            <h4>Clicks per second : {{clicksPerSecond}}</h4>
            <v-btn @click="increaseClicks()" large color="error" >Click</v-btn>
        </div>
        <img v-show="clicksPerSecond>20" class="gentleman" src="@/assets/images.jpg" width="150">
        <img v-show="clicksPerSecond>40" class="russian" src="@/assets/russian.jpg" width="200">
        <img v-show="clicksPerSecond>60" class="original" src="@/assets/original.png" width="400">
    </v-parallax>
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
        AnimateRotate(360);
    },
    methods:{
        incrementPerSecond:function(){
            this.$store.commit("increaseNumberOfClicksPerSecond")
            setTimeout(this.incrementPerSecond,1000)
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
 
 function AnimateRotate(angle) {
    var $elem = $('.gentleman');
    var russian = $('.russian');
    var original = $('.original');

	$({deg: 0}).animate({deg: angle}, {
		duration: 300,
		step: function(now) {
			$elem.css({
				transform: 'rotate(' + now + 'deg)'
            });
            russian.css({
				transform: 'rotate(' + now + 'deg)'
            });
            original.css({
				transform: 'rotate(' + now + 'deg)'
            });
		},
		complete: function(){
			AnimateRotate(360);
		}
	},'linear');
}

</script>
<style scoped>
    .login-box{
        position: absolute;
        top:40%;
        left: 38%;
    }
    .comic{
        font-family: "Comic Sans MS", "Comic Sans", cursive  !important;
    }
    .gentleman{
        position:absolute;
        top:25%;
        left:10%;
    }
    .russian{
        position:absolute;
        top:10%;
        left:70%;
    }
    .original{
      position:absolute;
        top:40%;
        left:55%;  
    }
</style>
