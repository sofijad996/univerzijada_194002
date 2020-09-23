<template v-for="game in games">
  <div id="game" class="mx-auto">
    <b-card class="mx-auto" :title="game.stadium+', '+game.date+ ' '+game.time" :sub-title="game.stadium_address">
      <b-card-text>
        Student participants:
        <li v-for="student in game.students" :key="student">{{ student }}</li>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
import users from "@/data/users.js";
import games from "@/data/games.js";
export default {
  name: "Game",
  props: ["game"],
  data() {
    return {
      users,
      games,
    };
  }
  
};
</script>

<style lang="scss">
#card, .game, .gamesTable {
  margin: 0 auto; /* Added */
        float: none; /* Added */
        margin-bottom: 10px; /* Added */
};
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


