<template>
  <div id="organizatorProfile">
    <OrganizatorNav />
    <Profile/>
  </div>
</template>

<script>
import OrganizatorNav from "./OrganizatorNav";
import Profile from "./Profile";
import users from "@/data/users.js";

export default {
  name: "OrganizatorProfile",
  components: {
    OrganizatorNav,
    Profile
  },

  data() {
    return {
      users
    };
  },
  created(){

/*    var user = this.users.find(
        (user) =>
          user.username == localStorage.getItem('prijavljenKorisnik')
      );
    this.user=user;*/
  }
};
</script>

<style lang="scss">
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
