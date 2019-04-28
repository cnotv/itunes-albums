<template>
  <section>
    <a-row
      :gutter="16"
      type="flex"
    >
      <a-col
        v-for="(value, key) in albums"
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

@Component({
  components: {
    Album,
  },
  data() {
    return {
      albums: [
        {
          title: 'title 1',
          artist: 'artist 1',
        },
        {
          title: 'title 2',
          artist: 'artist 2',
        },
      ],
    };
  },
})
export default class Home extends Vue {}
</script>
