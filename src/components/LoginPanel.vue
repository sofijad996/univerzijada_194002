<template>
  <div id="loginForm">
    <b-container >
      <img src="@/assets/logo.png">
      <br><br>
      <b-row class="justify-content-md-center">
        <b-input
          id="username"
          class="w-25 mb-3"
          type="text"
          name="username"
          v-model="username"
          placeholder="Enter your username"
          required
        ></b-input>
      </b-row>

      <b-row class="justify-content-md-center">
        <b-input
          id="password"
          class="w-25 mb-3"
          type="password"
          name="password"
          v-model="password"
          placeholder="Enter your password"
          v-on:keyup.enter="login"
          required
        ></b-input>
      </b-row>

      <b-button class="w-25 mb-3" variant="outline-info" @click="login">Sign in</b-button>
    </b-container>
  </div>
</template>

<script>
import router from "../router/index";
import users from "@/data/users.js";

export default {
  name: "Login",
  methods: {
    login() {
      var user = this.users.find(
        (user) =>
          user.username == this.username && user.password == this.password
      );

      if (user != null) {
        localStorage.setItem("prijavljenKorisnik", user.username);
        localStorage.setItem("user", user);
        router.push("/" + user.role);

      } else {
        alert("Incorrect  username or password!");
      }
    },
  },
  data() {
    return {
      username: "",
      password: "",
      users,
    };
  },
};
</script>

<style lang="scss">
#loginForm {
  margin: auto;
  padding: 170px;
  align-items: center;
}
</style>


