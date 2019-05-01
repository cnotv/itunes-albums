<template>
  <a-auto-complete
    style="width: 100%"
    placeholder="Search for an album"
    :dataSource="getAlbumsTitle"
    :filterOption="filterOption"
    @search="filterAlbums"
    @select="filterAlbums"
  >
    <a-input>
      <a-icon slot="suffix" type="search" />
    </a-input>
  </a-auto-complete>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import { Entry } from '../models/album';

export default Vue.extend({
  name: 'Search',
  computed: {
    ...mapGetters([
      'getAlbumsTitle',
    ]),
  },
  methods: {
    ...mapActions([
      'filterAlbums',
    ]),
    filterOption(input: string, option: any) {
      return option.componentOptions.children[0].text.toUpperCase().indexOf(input.toUpperCase()) >= 0;
    },
  },
});
</script>