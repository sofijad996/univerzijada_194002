<template>
  <div id="gamesAdd">
    <OrganizatorNav />
<center>
  <br>
  <h3>Add Student to a Game</h3>
  <br>
      <b-form-group
      >
        <div class="container" id="picker">
          <div class="row">
            <div class="col">
              <b-list-group>
                <b-list-group-item
                  button
                  v-for="student in users"
                  :key="student"
                >{{ student.name}} {{ student.lastname}}</b-list-group-item>
              </b-list-group>
            </div>
            <div class="col">
              <b-list-group>
                <b-list-group-item
                  button
                  v-for="game in games"
                  :key="game"
                >{{ game.stadium}}, {{ game.date}} {{game.time}}</b-list-group-item>
              </b-list-group>
            </div>
          </div>
        </div>
      </b-form-group>
</center>
<br>
     
        <b-button class="w-25 mb-3" variant="outline-info" @click=addStudent>Add Student</b-button>
     
 
  </div>
</template>

<script>
import OrganizatorNav from "./OrganizatorNav";
import users from "@/data/users.js";
import games from "@/data/games.js";
import router from "../router/index";

export default {
  name: "GamesAdd",
  props: ["gamesAdd"],
  components: {
    OrganizatorNav,
  },
  data() {
    return {
      users,
      games,
    };
  },
  methods: {
    addStudent() {      
        alert("Student successfully added!");    
        router.push("/organizator");
    }
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
#picker {
  padding-left: 0px;
}
</style>


