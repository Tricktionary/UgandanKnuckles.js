<template>
  <v-app dark>
    <!-- Side View -->
    <router-view name="sideView"></router-view>

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
}
</script>

<style scoped>

</style>

