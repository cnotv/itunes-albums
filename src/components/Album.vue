<template>
  <a-card
    hoverable
    :style="{
      width: '296px',
      marginBottom: '16px'
    }"
    @click="setCurrentAlbum(info)"
  >
    <img
      alt="example"
      :src="info['im:image'][2].label"
      slot="cover"
    />
    <template class="ant-card-actions" slot="actions">
      <a-icon type="ellipsis" />
    </template>

    <a-card-meta
      :title="info.title.label"
      :description="info['im:artist'].label"
    >
      <a-avatar
        slot="avatar"
        :src="info['im:image'][0].label"
      />
    </a-card-meta>
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
  }
});
</script>