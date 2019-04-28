<template>
  <a-card
    hoverable
    style="width: 300px"
  >
    <img
      alt="example"
      src="https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/a7/31/24/a731244c-e065-2f44-63a2-d15b6b27fefa/00602577427657.rgb.jpg/170x170bb-85.png"
      slot="cover"
    />
    <template class="ant-card-actions" slot="actions">
      <a-icon type="ellipsis" />
    </template>

    <a-card-meta
      :title="info.title"
      :description="info.artist"
    >
      <a-avatar slot="avatar" src="https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/a7/31/24/a731244c-e065-2f44-63a2-d15b6b27fefa/00602577427657.rgb.jpg/170x170bb-85.png" />
    </a-card-meta>
  </a-card>
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