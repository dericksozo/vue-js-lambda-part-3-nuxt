<template>
  <div>
    <h1>{{ post.text }}</h1>
    <hr>
    <p>{{ post.body }}</p>
  </div>
</template>

<script>

import MicroPostsService from '~/services/MicroPostsService';

export default {

  async asyncData ({ params }) {
    const post = await MicroPostsService.getMicroPost(params.id);

    return {
      post
    };
  },

  data () {
    return {
      post: undefined
    };
  },

  head () {
    return {
      title: this.post.text + " - Micro Nuxt Blog",
      link: [
        { rel: 'canonical', href: '/show/' + this.post._id }
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: this.post.body },
        { hid: 'og-title', property: 'og:title', content: this.post.text },
        { hid: 'og-url', property: 'og:url', content: 'https://localhost:3000/show/' + this.post._id }
      ]
    }
  }
}
</script>
