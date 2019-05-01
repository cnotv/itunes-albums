<template>
  <a-drawer
    v-if="getCurrentAlbum"
    @close="setCurrentAlbum()"
    :visible="!!getCurrentAlbum"
    :width="420"
    :wrapStyle="{
      height: 'calc(100% - 108px)',
      overflow: 'auto',
      paddingBottom: '108px'
    }"
  >
    <div class="info__content">
      <img
        alt="example"
        :src="getCurrentAlbum['im:image'][2].label"
        slot="cover"
        class="info__image"
      />
      <h3>{{getCurrentAlbum.title.label}}</h3>
      <p>{{getCurrentAlbum.category.attributes.label}} · {{getCurrentAlbum['im:releaseDate'].label}}</p>
      <h1>{{getCurrentAlbum['im:price'].label}}</h1>
      <p>{{getCurrentAlbum.rights.label}}</p>
      <p><strong>Released:</strong> {{getCurrentAlbum['im:releaseDate'].label}}</p>
    </div>
    
    <div class="info__footer">
      <a-button
        :rel="getCurrentAlbum.link.attributes.rel"
        :href="getCurrentAlbum.link.attributes.href"
        type="primary"
      >Also Available on Apple Music</a-button>
    </div>
  </a-drawer>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
export default Vue.extend({
  name: 'Info',
  computed: {
    ...mapGetters([
      'getCurrentAlbum',
    ]),
  },
  methods: {
    ...mapActions([
      'setCurrentAlbum',
    ]),
  },
});
</script>

<style lang="scss">
.info {
  &__content {
    padding: 24px;
    text-align: center;
  } 

  &__footer {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border-top: 1px solid #e9e9e9;
    padding: 10px 16px;
    background: #fff;
    text-align: right;
  }

  &__image {
    width: 50%;
    margin: 24px;
    border-radius: 50%;
  }
}

div.ant-drawer-mask {
  background-color: rgba(255,255,255,.7);
}

div.ant-drawer.ant-drawer-open .ant-drawer-mask {
  backdrop-filter: saturate(180%) blur(10px);
  transition: opacity .5s cubic-bezier(.28,.11,.32,1);
  opacity: 1;
  animation: unset;
  margin: -20px;
  padding: 20px;
  box-sizing: content-box;
}
</style>
