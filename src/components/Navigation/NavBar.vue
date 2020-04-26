<template>
    <b-navbar toggleable="md" type="dark" variant="info">
    <b-navbar-brand  :to="{ name: 'Home'}" :active="$route.name == 'Home'">Hello Vue TS
      <!-- <img :src="require('../../assets/logo.png')" id='logo'> Meal App -->
    </b-navbar-brand>
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item :to="{ name: 'Home'}" :active="$route.name == 'Home'">Home</b-nav-item>
        <b-nav-item v-if="!user || user.loggedIn" :to="{ name: 'Timeline'}" :active="$route.name == 'Timeline'">Timeline</b-nav-item>
        <b-nav-item v-if="user && !user.loggedIn" :to="{ name: 'Login'}" :active="$route.name == 'Login'">Login</b-nav-item>
          <b-nav-item v-if="!user || user.loggedIn" :to="{ name: 'Logout'}" :active="$route.name == 'Logout'">Logout</b-nav-item>
        <b-nav-item v-if="user && !user.loggedIn" :to="{ name: 'Register'}" :active="$route.name == 'Register'">Register</b-nav-item>
        <b-nav-item-dropdown text="Categories" right>
          <b-dropdown-item>
            Test 1
          </b-dropdown-item>
          <b-dropdown-item>
            Test 2
          </b-dropdown-item>
        </b-nav-item-dropdown>
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
import store from '@/store';

@Component({
    //name: "nav-bar"
})
export default class NavBar extends Vue {
  user = this.$store.state.myUser.userM;
}
</script>