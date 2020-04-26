<template>
  <div class="container">
    <h2>Timeline</h2>
    <div v-if="user" class="alert alert-success" role="alert">You are logged in!</div>
    <h3>{{ user }}</h3>
  </div>
</template>
<script lang="ts">
//Documentation decorators: https://github.com/kaorun343/vue-property-decorator
import { Component, Prop, Vue } from "vue-property-decorator";
import { Communication } from "./communication";
import store from "@/store";

@Component
export default class Timeline extends Vue {
  user = this.$store.state.myUser.userM;

  communicationArray: Communication[] = [
    { id: 1, message: "Eerste bericht" },
    { id: 2, message: "Tweede bericht" },
    { id: 3, message: "Derde bericht" }
  ];
}
</script>