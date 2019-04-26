<template>
  <article>
    <img src="" alt="">
    <h1>
      <router-link to="/about">{{ info.title }}</router-link>
    </h1>
    <h2>{{ info.artist }}</h2>
  </article>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Album',
  props: [
    'info',
  ],
});
</script>