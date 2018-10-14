<template>
  <div class="share-thoughts">
    <label for="share-thoughts">What do you want to share?</label>

    <div class="Grid">

      <div class="Grid-cell Grid-cell--full">
        <input class="Input" id="share-thoughts" v-model="text" placeholder="be nice!"/>
      </div>

      <div class="Grid-cell Grid-cell--full">
        <textarea class="Input" v-model="body" placeholder="The body of the post."></textarea>
      </div>

      <div class="Grid-cell Grid-cell--full">
        <button class="Input" v-on:click="shareThoughts">Share!</button>
      </div>
    </div>
  </div>
</template>

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

<style>
.share-thoughts {
  max-width: 600px;
  margin: 0 auto;
}

.Input {

  box-sizing: border-box;

  width: 100%;
  padding: 1rem;

  border-radius: 4px;

  border: none;
  background: none;

  border: 1px solid grey;

  font-size: 1rem;

  margin-top: 1rem;
}
</style>
