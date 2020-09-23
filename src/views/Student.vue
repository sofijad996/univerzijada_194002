<template>
  <div class="student">
    <StudentNav />
    <br />
    <h2>My games:</h2>
    <br />
    <center>
      <b-input-group prepend="Search"  id="searchBox" >
        <b-form-input></b-form-input>
        <b-input-group-append>
          <b-button variant="info">
            <b-icon icon="search"></b-icon>
          </b-button>
        </b-input-group-append>
      </b-input-group>
      <br />
    </center>
    <table id="gamesTable" class="mx-auto" width="800px">
      <tr v-for="game in games" :key="game">
        <Game :game="game" />

        <br />
      </tr>
    </table>
  </div>
</template>

<script>
import StudentNav from "../components/StudentNav";
import Game from "../components/Game";
import users from "@/data/users.js";
import games from "@/data/games.js";

export default {
  name: "Student",
  components: {
    StudentNav,
    Game,
  },
  data() {
    return {
      users,
      games,
    };
  },
  created() {
    var user = this.users.find(
      (user) => user.username == localStorage.getItem("prijavljenKorisnik")
    );
    this.user = user;
  },
};
</script>

<style lang="scss">
#searchBox {
  width: 42%;
}
</style>
