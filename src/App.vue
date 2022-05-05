<template>
  <div id="app">
    <v-app>
      <LoginComponent />
    </v-app>
  </div>
</template>

<script lang="ts">
import LoginComponent from './components/LoginComponent.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    LoginComponent
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
