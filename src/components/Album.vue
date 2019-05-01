<template>
  <a-card
    hoverable
    class="album"
    @click="setCurrentAlbum(info)"
  >
    <img
      alt="example"
      :src="info['im:image'][2].label"
      slot="cover"
    />

    <a-card-meta
      :title="info['im:name'].label"
      :description="info['im:artist'].label"
    />
  </a-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';
export default Vue.extend({
  name: 'Album',
  props: [
    'info',
  ],
  methods: {
    ...mapActions([
      'setCurrentAlbum',
    ]),
  },
});
</script>

<style lang="scss" >
// TODO: Export globally
$gutter: 16px;

// FIXME: Move UI libraries modification
// in an unique file in the assets folder and create modifier classes
.album {
  &.ant-card {
    width: 100%;
    margin-bottom: $gutter;
  }

  .ant-card-body,
  .ant-card-meta {
    &:before,
    &:after { 
      display: none;
    }
  }

  .ant-card-cover {
    float: left;
    margin-right: $gutter;

    img {
      width: 94px;
    }
  }
}
</style>