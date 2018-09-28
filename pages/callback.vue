<script>
let Auth0 = null;

if (process.browser) {
  Auth0 = require('auth0-web');
}

export default {
  created () {
    if (Auth0) {
      Auth0.handleAuthCallback(() => {
        this.$router.push('/')
      });  
    }
  }
}
</script>

<template>
<div>
  <p>Loading your profile...</p>
</div>
</template>

<style scoped>
div > p {
  margin: 0 auto;
  text-align: center;
  font-size: 22px;
}
</style>
