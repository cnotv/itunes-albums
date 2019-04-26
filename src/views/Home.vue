<template>
  <section>
    <Search/>
    <Album
      v-for="(value, key) in albums"
      :key="key"
      :info="value"
    />
    <Info/>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Album from '@/components/Album.vue'; // @ is an alias to /src
import Info from '@/components/Info.vue'; // @ is an alias to /src
import Search from '@/components/Search.vue'; // @ is an alias to /src

@Component({
  components: {
    Album,
    Info,
    Search,
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
