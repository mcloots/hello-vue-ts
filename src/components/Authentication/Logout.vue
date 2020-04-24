<template>
  <div class="container">
    <h2>Logging out</h2>
  </div>
</template>

<script lang="ts">
//Documentation decorators: https://github.com/kaorun343/vue-property-decorator
import { Component, Prop, Watch, Vue } from "vue-property-decorator";
import firebase from "firebase";


//const userModule = namespace('User');

@Component({
  //name: "login"
})
export default class Logout extends Vue {
  mounted() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "Home"
          });
        });
    }
}
</script>