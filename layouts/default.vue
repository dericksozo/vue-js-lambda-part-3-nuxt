<template>
  <div id="app">
    <img src="~/assets/logo.png">
    <nuxt />
  </div>
</template>

<script>
import * as Auth0 from 'auth0-web'

export default {
  name: 'App',
  created () {
    console.log("process from default", process);

    Auth0.configure({
      domain: process.env.domain,
      clientID: process.env.clientID,
      audience: process.env.audience,
      redirectUri: process.env.redirectUri,
      responseType: 'token id_token',
      scope: 'openid profile'
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
