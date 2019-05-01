<template>
  <a-layout id="app">
    <Info/>
    <a-layout-header :style="{
      position: 'fixed',
      zIndex: 1,
      width: '100vw',
      background: '#313131'
    }">
      <Search/>
    </a-layout-header>

    <a-layout-content :style="{
      padding: '50px',
      marginTop: '64px',
    }">
      <router-view/>
    </a-layout-content>
  </a-layout>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Info from '@/components/Info.vue'; // @ is an alias to /src
import Search from '@/components/Search.vue'; // @ is an alias to /src

@Component({
  components: {
    Info,
    Search,
  },
})
export default class App extends Vue {}
</script>
