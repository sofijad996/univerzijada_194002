<template>
  <div class="organizator">
    <OrganizatorNav />
    <br>
    <h2>All games:</h2>

    <table id="gamesTable" class="mx-auto" width="800px" >
        <tr v-for='game in games' :key="game" >
            <Game :game='game'/>
          <br>
        </tr>
    </table>
  </div>
</template>

<script>
import OrganizatorNav from "../components/OrganizatorNav";
import Game from "../components/Game";
import users from "@/data/users.js";
import games from "@/data/games.js";

export default {
  name: "Organizator",
  components: {
    OrganizatorNav,
    Game
  },
  data() {
    return {
      users,
      games
    };
  }
};
</script>

<style lang="scss">
</style>