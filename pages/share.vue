<script>
import MicroPostsService from '~/services/MicroPostsService';

export default {
  data () {
    return {
      text: '',
      body: ''
    }
  },
  methods: {
    async shareThoughts () {
      await MicroPostsService.insertMicroPost(this.text, this.body)
      this.$router.push('/')
    }
  }
}
</script>

<template>
<div class="share-thoughts">
  <label for="share-thoughts">What do you want to share?</label>
  <input id="share-thoughts" v-model="text" placeholder="be nice!"/>
  <textarea v-model="body" placeholder="The body of the post."></textarea>
  <button v-on:click="shareThoughts">Share!</button>
</div>
</template>
