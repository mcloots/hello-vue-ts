<template>
    <b-navbar toggleable="md" type="dark" variant="info">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <!-- <b-navbar-brand>
      <img :src="require('../../assets/logo.png')" id='logo'> Meal App
    </b-navbar-brand> -->
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item :to="{ name: 'Home'}" :active="$route.name == 'Home'">Home</b-nav-item>
        <b-nav-item :to="{ name: 'Login'}" :active="$route.name == 'Login'">Login</b-nav-item>
        <!-- <b-nav-item :to="{ name: 'random'}" :active="$route.name.includes('random')">Random</b-nav-item>
        <b-nav-item :to="{ name: 'search'}" :active="$route.name.includes('search')">Search</b-nav-item> -->
        <!-- <b-nav-item-dropdown text="Categories" right>
          <b-dropdown-item v-for="(cat, index) in categories" :active="$route.path.includes(`search/category/${cat.strCategory}`)" :key='index' :to="`/search/category/${cat.strCategory}`">
            {{cat.strCategory}}
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Areas" right>
          <b-dropdown-item v-for="(area, index) in areas" :active="$route.path.includes(`search/area/${area.strArea}`)" :key='index' :to="`/search/area/${area.strArea}`">
            {{area.strArea}}
          </b-dropdown-item>
        </b-nav-item-dropdown> -->
     </b-navbar-nav>
     <!-- Right aligned nav items -->
     <b-navbar-nav class="ml-auto">
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script lang="ts">
//Documentation decorators: https://github.com/kaorun343/vue-property-decorator
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
    //name: "nav-bar"
})
export default class NavBar extends Vue {

}
</script>