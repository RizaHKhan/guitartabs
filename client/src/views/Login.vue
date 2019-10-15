<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
        <div class="white elevation-2">
          <v-toolbar flat dense class="cyan" dark>
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
        </div>

    
  <div class="pl-4 pr-4 pt-2 pd-2">
      <v-col cols="12" sm="6" md="3">
          <v-text-field
            type="text"
            label="Email"
            name="email"
            v-model="email"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-text-field
            type="password"
            label="Password"
            name="email"
            v-model="password"
          ></v-text-field>
        </v-col>
    <v-btn @click.prevent="login" type="submit">Login</v-btn>
    
    <div class="error">{{error}}</div>
    <div class="success">{{success}}</div>
    
          
  </div>
      </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data() {
    return {
        email: '',
        password: '',
        error: null,
        success: null        
    }
  },
  methods: {
    async login() {
      try {
          const response = await AuthenticationService.login({
            email: this.email,
            password: this.password
          })
          
          this.$store.dispatch('setToken', response.data.token)
          this.$store.dispatch('setUser', response.data.user)
      } catch(error) {
          this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .error {
    color: red;
  }

   .success {
    color: green;
  }

</style>