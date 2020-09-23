<template>
  <div id="loginNav">
    <b-navbar toggleable="lg" type="dark">
      <b-navbar-brand>
        <router-link class-active="active" to="/">UNIVERSIADE 2021</router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "LoginNav"
};
</script>

<style lang="scss">
.navbar-dark {
    background-color: #285d99;
}
a,
a:hover,
a > a,
a > a:hover,
.router-link-active,
.router-link-active:hover,
.router-link-exact-active {
  color: #fff;
}
</style>


