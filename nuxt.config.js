require('dotenv').config();

const pkg = require('./package');

module.exports = {
  mode: 'universal',

  css: ['~/assets/main.css'],

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  env: {
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.CLIENT_ID,
    audience: process.env.AUDIENCE,
    redirectUri: process.env.REDIRECT_URI
  }
}
