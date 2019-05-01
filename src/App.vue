<template>
  <a-layout id="app">
    <Info/>
    <a-layout-header class="layout__header">
      <Search/>
    </a-layout-header>

    <a-layout-content class="layout__content">
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

<style lang="scss" scoped>
.layout {
  &__header {
    position: fixed;
    z-index: 1;
    width: 100vw;
    background: #313131;
  }

  &__content {
    padding: 3vh 3vw;
    margin-top: 64px;
    min-height: calc(100vh - 64px);
  }
}
</style>
