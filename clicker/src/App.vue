<template>
  <v-app dark>
    <v-toolbar app>
      <v-btn icon  @click.stop="toggleDrawer()">
        <i class="fas fa-bars"></i>
      </v-btn>
    </v-toolbar>
    <!-- Side View -->
    <router-view name="sideView" ></router-view>
    <!-- Main View -->
    <v-content>
      <v-container fluid>
        <router-view name="mainView"></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
 
export default {
  name:"App",
  data(){
    return{
    }
  },
  computed:{
    drawer(){
      return this.$store.state.drawer
    }
  },
  methods:{
    toggleDrawer: function(){
      this.$store.commit("toggleDrawer");
    }
  }
}
</script>
<style scoped>

</style>

