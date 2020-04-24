<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">{{formTitle}}</div>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">{{error}}</div>
            <form action="#" @submit.prevent="submit">
              <div class="form-group row" v-if="!isLogin">
                <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>

                <div class="col-md-6">
                  <input
                    id="name"
                    type="name"
                    class="form-control"
                    name="name"
                    value
                    :required="isLogin ? false : true"
                    autofocus
                    v-model="loginRegisterForm.name"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

                <div class="col-md-6">
                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    name="email"
                    value
                    required
                    autofocus
                    v-model="loginRegisterForm.email"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                <div class="col-md-6">
                  <input
                    id="password"
                    type="password"
                    class="form-control"
                    name="password"
                    required
                    v-model="loginRegisterForm.password"
                  />
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-primary">{{formTitle}}</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
//Documentation decorators: https://github.com/kaorun343/vue-property-decorator
import { Component, Prop, Watch, Vue } from "vue-property-decorator";
import { RegisterLogin as LoginRegisterForm } from "@/components/Authentication/Models/registerLogin";
import firebase from "firebase";

@Component({
  //name: "login"
})
export default class Login extends Vue {
  error = null;
  loginRegisterForm = new LoginRegisterForm("", "", "");
  isLogin = true;
  formTitle!: string;

  @Watch("$route", { immediate: true, deep: true })
  onUrlChange(newVal: any) {
    if (this.$route.name == "Login") {
      this.isLogin = true;
      this.formTitle = "Login";
    } else {
      this.isLogin = false;
      this.formTitle = "Register";
    }
  }

  mounted() {
    //we know route, so we know if this is login or register form
  }

  submit() {
    if(this.isLogin) {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.loginRegisterForm.email, this.loginRegisterForm.password)
      .then(data => {
        this.$router.replace({ name: "Dashboard" });
      })
      .catch(err => {
        this.error = err.message;
      });
    } else {
      firebase
      .auth()
      .createUserWithEmailAndPassword(
        this.loginRegisterForm.email,
        this.loginRegisterForm.password
      )
      .then(data => {
        if (data.user != null) {
          data.user
            .updateProfile({
              displayName: this.loginRegisterForm.name
            })
            .then(() => {
              console.log('ready');
            });
        }
      })
      .catch(err => {
        this.error = err.message;
      });
    }
  }
}
</script>