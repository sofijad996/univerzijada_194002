<template>
  <div id="studentProfile">
    <StudentNav />
    <Profile/>
  </div>
</template>

<script>
import StudentNav from "./StudentNav";
import Profile from "./Profile";
import users from "@/data/users.js";

export default {
  name: "StudentProfile",
  components: {
    StudentNav,
    Profile
  },

  data() {
    return {
      users
    };
  },
  created(){
    var username = localStorage.getItem('prijavljenKorisnik')
    //var user = localStorage.getItem('user')
    this.username = username;
    //this.user = user;
    this.users = users;

    var user = this.users.find(
        (user) =>
          user.username == this.username
      );
      this.user=user;
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
