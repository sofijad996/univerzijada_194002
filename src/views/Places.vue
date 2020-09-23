<template>

  <div class="places">
    <StudentNav/>
    <div id="content">
    <table class="mx-auto" id="placesTable">
      
        <tr v-for='place in places' :key="place">
          <router-link :to='/placedetails/+place.id'>
            <Place :place='place'/>
          </router-link>
          <br>
        </tr>
        
        
    
    </table>
    </div>
  </div>
</template>



<script>
import StudentNav from "../components/StudentNav";
import Place from '../components/Place'
import places from "@/data/places.js";

export default {
  name: "Places",
  components: {
    StudentNav,
    Place
  },
  data(){
    return {
      places
    }

  }
  
};
</script>

<style>
a,
a:hover,
a > a,
a > a:hover,
.router-link-exact-active,
.router-link-active,
.router-link-exact-active:hover {
  color: #fff;
}
#content{
  margin: auto;
  padding: 50px 170px 170px 170px;
  align-items: center;
}
#placesTable > tr > .router-link-exact-active,
#placesTable > tr >  .router-exact-active {
color: black;
}
</style>
