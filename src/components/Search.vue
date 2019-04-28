<template>
  <a-input-search
    placeholder="Search for an album"
    @search="onSearch"
  />
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Search',
  methods: {
    onSearch(value: string) {
    },
  },
});
</script>