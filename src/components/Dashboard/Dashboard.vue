<template>
  <div class="container">
    <h2>Dashboard</h2>
    <div v-if="user" class="alert alert-success" role="alert">You are logged in!</div>
    <h3>{{ user }}</h3>
  </div>
</template>
<script lang="ts">
//Documentation decorators: https://github.com/kaorun343/vue-property-decorator
import { Component, Prop, Vue } from "vue-property-decorator";

import store from '@/store';

@Component
export default class Dashboard extends Vue {
  user = this.$store.state.myUser.userM;
}
</script>