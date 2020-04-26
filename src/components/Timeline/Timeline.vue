<template>
  <div class="container">
    <h2>Timeline</h2>
    <!-- <div v-if="user" class="alert alert-success" role="alert">You are logged in!</div>
    <h3>{{ user }}</h3>-->
    <!-- <ul>
      <li v-for="com in communicationArray" :key="com.id">
        <a @click="selectedComm = com">{{com.message}}</a>
      </li>
    </ul> -->
    <!-- v-if: added er removed from DOM -->
    <!-- <div v-if="selectedComm">{{ selectedComm.message }}</div> -->
    <!-- Show/hide, but always in DOM : display:none -->
    <!-- <div>
      <label for="show">
        Show more
        <input type="checkbox" id="show" v-model="showMore" />
      </label>
    </div>
    <p v-show="showMore">Show me!</p>
    <input v-if="selectedComm" type="date" v-model="selectedComm.date" /> -->
    <!-- Filter -->
    <!-- <div v-if="selectedComm">{{ selectedComm.date | shortDate }}</div> -->

<div>
   <!-- Latest update -->
  <vue-timeline-update v-for="com in communicationArray" :key="com.id"
    :date="com.date"
    :title="com.title"
    :description="com.message"
    category="announcement"
    icon="code"
    color="blue"
  />

  
  <!-- <vue-timeline-update
    :date="new Date('2016-09-30')"
    title="v2.0.0 - Ghost in the Shell"
    description="Today I am thrilled to announce the release of Vue.js 2.0.0"
    thumbnail="/images/vuetimeline/ghost_in_the_shell.jpg"
    category="announcement"
    icon="code"
    color="white"
    is-last
  /> -->
</div>
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
      return format(
        parse(value, inputDateFormat, new Date()),
        displayDateFormat
      );
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
        title: 'Nummer 1',
        message: "Eerste bericht",
        //date: format(new Date(2020, 1, 1), inputDateFormat)
        date: new Date(2020, 1, 1)
      },
      {
        id: 2,
        title: 'Nummer 2',
        message: "Tweede bericht",
        date: new Date(2017, 2, 1)
      },
      {
        id: 3,
        title: 'Nummer 3',
        message: "Derde bericht",
        date: new Date(2009, 3, 1)
      },
      {
        id: 4,
        title: 'Nummer 4',
        message: "Derde bericht",
        date: new Date(2009, 3, 1)
      },
      {
        id: 5,
        title: 'Nummer 5',
        message: "Derde bericht",
        date: new Date(2009, 3, 1)
      },
      {
        id: 6,
        title: 'Nummer 6',
        message: "Derde bericht",
        date: new Date(2009, 3, 1)
      },
      {
        id: 7,
        title: 'Nummer 7',
        message: "Derde bericht",
        date: new Date(2009, 3, 1)
      },
      {
        id: 8,
        title: 'Nummer 8',
        message: "Derde bericht",
        date: new Date(2009, 3, 1)
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
<style lang="scss">

</style>