<template>
  <div id="app">
    <v-app>
      <router-view></router-view>
    </v-app>
  </div>
</template>

<script lang="ts">
import UserComponent from './components/UserComponent.vue';
import Layout from './components/Layout.vue';
import Header from './views/partials/Header.vue';
import Footer from './views/partials/Footer.vue';

import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    UserComponent,
    Layout,
    Header,
    Footer
  }
})
export default class App extends Vue {}
</script>
<style>
html {
  font-size: 16px;
  font-family: Roboto, sans-serif;
  overflow-y: auto !important;
}
</style>
