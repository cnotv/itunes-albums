<template>
  <section>
    <a-row
      :gutter="16"
      type="flex"
    >
      <a-col
        v-for="(value, key) in getAlbums"
        :key="key"
      >
        <Album :info="value"/>
      </a-col>
    </a-row>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Album from '@/components/Album.vue'; // @ is an alias to /src
import { mapActions, mapGetters } from 'vuex';

@Component({
  components: {
    Album,
  },
  computed: {
    ...mapGetters([
      'getCurrent',
      'getAlbums',
    ]),
  },
  methods: {
    ...mapActions([
      'loadAlbums',
    ]),
  },
  mounted() {
    this.$store.dispatch('loadAlbums');
  },
})
export default class Home extends Vue {}
</script>
