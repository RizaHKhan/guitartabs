<template>
  <div class="register">
    <h1>This it the register component</h1>

    <form>
        <input type="text" name="username" placeholder="username" v-model="username">
        <input type="text" name="email" placeholder="email" v-model="email" >
        <input type="text" name="password" placeholder="password" v-model="password">
        <button @click.prevent="register">Register</button>
    </form>

  </div>
</template>

<script>

import AuthenticationService from '@/services/AuthenticationService'


export default {
  data() {
    return {
        username: '',
        email: '',
        password: ''
    }
  },
  methods: {
    async register() {
    
    const response = await AuthenticationService.register({
          username: this.username,
          email: this.email,
          password: this.password
    
    })
        console.log(response.data)
    }
  }
}
</script>