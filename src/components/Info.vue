<template>
  <a-drawer
    v-if="getCurrentAlbum"
    :title="getCurrentAlbum ? getCurrentAlbum.title.label : ''"
    @close="setCurrentAlbum()"
    :visible="!!getCurrentAlbum"
    :width="420"
    :wrapStyle="{
      height: 'calc(100% - 108px)',
      overflow: 'auto',
      paddingBottom: '108px'
    }"
  >
    <div>
      <p>{{getCurrentAlbum.category.attributes.label}} · {{getCurrentAlbum['im:releaseDate'].label}}</p>
      <img
        alt="example"
        :src="getCurrentAlbum['im:image'][2].label"
        slot="cover"
        :style="{
          width: '50%'
        }"
      />
      <h1>{{getCurrentAlbum['im:price'].label}}</h1>
      <p>{{getCurrentAlbum.rights.label}}</p>
      <p><strong>Released:</strong> {{getCurrentAlbum['im:releaseDate'].label}}</p>
    </div>
    
    <div
      :style="{
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        borderTop: '1px solid #e9e9e9',
        padding: '10px 16px',
        background: '#fff',
        textAlign: 'right',
      }"
    >
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
  }
});
</script>