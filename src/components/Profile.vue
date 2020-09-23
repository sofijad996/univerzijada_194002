<template>
  <div id="profile">
    <User :user='user'/>
  </div>
</template>

<script>
import User from "./User";
import users from "@/data/users.js";

export default {
  name: "Profile",
  components: {
    User
  },

  data() {
    return {
      users
    };
  },
  created(){
    /*var user = this.users.find(
        (user) =>
          user.username == localStorage.getItem('prijavljenKorisnik')
      );
    this.user=user;*/
    var username = localStorage.getItem("prijavljenKorisnik");
    this.username = username;
    this.users = users;

    var user = this.users.find((user) => user.username == this.username);
    this.user = user;
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
