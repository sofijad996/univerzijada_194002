<template>
  <div class="login">
    <LoginNav />
    <LoginPanel />
  </div>
</template>

<script>
import LoginNav from "../components/LoginNav";
import LoginPanel from "../components/LoginPanel";

export default {
  name: "Login",
  components: {
    LoginNav,
    LoginPanel
  }
};
</script>
