<template>
  <div>
    <Header></Header>
    <router-view />
    <Footer></Footer>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '../views//partials/Header.vue';
import Footer from '../views/partials/Footer.vue';
@Component({
  components: {
    Header,
    Footer
  }
})
export default class UserComponent extends Vue {}
</script>
