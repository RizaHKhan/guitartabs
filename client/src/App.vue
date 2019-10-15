<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link 
       v-if="!$store.state.isUserLoggedIn"
       to="/register">Register</router-link> |
      <router-link 
      v-if="!$store.state.isUserLoggedIn"
       to="/login">Login</router-link>

       <v-btn 
       v-if="$store.state.isUserLoggedIn"
       @click="logout">
       LogOut
       </v-btn>
       <v-btn 
       v-if="$store.state.isUserLoggedIn"
       to="/songs">
       Go To Songs
       </v-btn>
    </div>
    <router-view/>
  </div>
</template>

<script>

import {mapState} from 'vuex'

export default {
  name: 'app',
  components: {

  }, 
  methods: {
    logout() {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      //TODO: redirect to homepage 
      
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
