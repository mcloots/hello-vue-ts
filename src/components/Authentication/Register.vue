<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Register</div>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">{{error}}</div>
            <form action="#" @submit.prevent="submit">
              <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>

                <div class="col-md-6">
                  <input
                    id="name"
                    type="name"
                    class="form-control"
                    name="name"
                    value
                    required
                    autofocus
                    v-model="registerForm.name"
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
                    v-model="registerForm.email"
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
                    v-model="registerForm.password"
                  />
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-primary">Register</button>
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
import { Component, Prop, Vue } from "vue-property-decorator";
import { Register as registerForm } from "@/components/Authentication/Models/register";
import firebase from "firebase";

@Component({
  //name: "nav-bar"
})
export default class Register extends Vue {
  error = null;
  registerForm = new registerForm("", "", "");

  submit() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(
        this.registerForm.email,
        this.registerForm.password
      )
      .then(data => {
        if (data.user != null) {
          data.user
            .updateProfile({
              displayName: this.registerForm.name
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
</script>

