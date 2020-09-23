<template>
  <div id="studentNav">
    <b-navbar toggleable="lg" type="dark">
      <b-navbar-brand>
        <router-link class-active="active" to="/student">UNIVERSIADE 2021</router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link class-active="active" to="/student/places">DISCOVER BELGRADE</router-link>
          </b-nav-item>
        </b-navbar-nav>
  
        <b-navbar-nav class="ml-auto">
          <router-link to="/student/profile"><b-avatar ></b-avatar></router-link>
          <b-nav-item>
            <router-link class-active="active" to="/">SIGN OUT</router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "StudentNav",
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


