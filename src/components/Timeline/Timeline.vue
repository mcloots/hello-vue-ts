<template>
  <div class="container">
    <h2>Timeline</h2>
    <!-- <div v-if="user" class="alert alert-success" role="alert">You are logged in!</div>
    <h3>{{ user }}</h3> -->
    <ul>
        <li v-for="com in communicationArray" :key="com.id">
            <a @click="selectedComm = com">{{com.message}}</a>
        </li>
    </ul>
    <!-- v-if: added er removed from DOM -->
    <div v-if="selectedComm">{{ selectedComm.message }}</div>
    <!-- Show/hide, but always in DOM : display:none -->
    <div v-if="selectedComm">{{ selectedComm.message }}</div>
    <div>
        <label for="show">
            Show more
            <input type="checkbox" id="show" v-model="showMore" />
        </label>
    </div>
    <p v-show="showMore">Show me!</p>
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
  selectedComm: Communication | null = null;
  showMore: boolean = false;

  communicationArray: Communication[] = [
    { id: 1, message: "Eerste bericht" },
    { id: 2, message: "Tweede bericht" },
    { id: 3, message: "Derde bericht" }
  ];
}
</script>