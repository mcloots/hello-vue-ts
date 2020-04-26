<template>
  <div class="container">
    <h2>Timeline</h2>
    <!-- <div v-if="user" class="alert alert-success" role="alert">You are logged in!</div>
    <h3>{{ user }}</h3>-->
    <ul>
      <li v-for="com in communicationArray" :key="com.id">
        <a @click="selectedComm = com">{{com.message}}</a>
      </li>
    </ul>
    <!-- v-if: added er removed from DOM -->
    <div v-if="selectedComm">{{ selectedComm.message }}</div>
    <!-- Show/hide, but always in DOM : display:none -->
    <div>
      <label for="show">
        Show more
        <input type="checkbox" id="show" v-model="showMore" />
      </label>
    </div>
    <p v-show="showMore">Show me!</p>
    <input v-if="selectedComm" type="date" v-model="selectedComm.date" />
    <!-- Filter -->
    <div v-if="selectedComm">{{ selectedComm.date | shortDate }}</div>
  </div>
</template>
<script lang="ts">
import { format, parse } from "date-fns";

const inputDateFormat = "yyyy-MM-dd";
const displayDateFormat = "d MMMM yyyy";

//Documentation decorators: https://github.com/kaorun343/vue-property-decorator
import { Component, Prop, Watch, Vue } from "vue-property-decorator";
import { Communication } from "./communication";
import store from "@/store";

@Component({
  filters: {
    shortDate(value: string) {
      return format(parse(value,inputDateFormat, new Date()), displayDateFormat);
    }
  }
})
export default class Timeline extends Vue {
  user = this.$store.state.myUser.userM;
  selectedComm: Communication | null = null;
  showMore: boolean = false;

  communicationArray: Communication[] = [];

  //Methods
  async getCommunications(): Promise<Communication[]> {
    let comms: Communication[] = [
      {
        id: 1,
        message: "Eerste bericht",
        date: format(new Date(2020, 1, 1), inputDateFormat)
      },
      {
        id: 2,
        message: "Tweede bericht",
        date: format(new Date(2017, 2, 1), inputDateFormat)
      },
      {
        id: 3,
        message: "Derde bericht",
        date: format(new Date(2009, 3, 1), inputDateFormat)
      }
    ];

    return new Promise(resolve => {
      setTimeout(() => resolve(comms), 1500);
    });
  }

  async loadCommunications() {
    this.communicationArray = [];
    this.communicationArray = await this.getCommunications();
  }

  //Lifecycle hooks

  created() {
    //no templates and virtual dom
    console.log("Fetching data from API/Firebase/...");
    this.loadCommunications();
  }

  //Watcher - deep = nested properties
  @Watch("selectedComm", { immediate: true, deep: true })
  onSelectedCommChange(newVal: Communication, oldValue: Communication) {
    console.log("Comm changed!");
    console.log("Old value " + JSON.stringify(oldValue));
    console.log("New value " + JSON.stringify(newVal));
  }

  //Properties = dotted
  @Watch("selectedComm.id", { immediate: true })
  onSelectedCommIdChange(newVal: Communication, oldValue: Communication) {
    console.log("Comm id changed!");
    console.log("Old id value " + JSON.stringify(oldValue));
    console.log("New id value " + JSON.stringify(newVal));
  }
}
</script>