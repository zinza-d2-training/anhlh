<template>
  <div id="app">
    <v-app>
      <router-view></router-view>
    </v-app>
  </div>
</template>

<script lang="ts">
import LoginComponent from './components/LoginComponent.vue';
import ForgotPassword from './components/ForgotPassword.vue';
import UserComponent from './components/UserComponent.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    LoginComponent,
    UserComponent,
    ForgotPassword
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
