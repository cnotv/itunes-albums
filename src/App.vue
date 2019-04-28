<template>
  <a-layout id="app">
    <a-layout-sider :style="{
      overflow: 'auto',
      height: '100vh',
      position: 'fixed',
      left: 0,
      background: 'white'
    }">
      <Info/>
    </a-layout-sider>

    <a-layout :style="{ marginLeft: '200px' }">
      <a-layout-header :style="{
        position: 'fixed',
        zIndex: 1,
        width: 'calc(100vw - 200px)',
        background: '#313131'
      }">
        <Search/>
      </a-layout-header>

      <a-layout-content :style="{
        padding: '50px',
        marginTop: '64px',
        height: 'calc(100vh - 64px)'
      }">
        <router-view/>
      </a-layout-content>
    </a-layout>
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
