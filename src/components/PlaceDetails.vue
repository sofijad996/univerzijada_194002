<template>
  <div id="placeDetails">
    <StudentNav/>
    <div id="content">
    <center>
      <h3>{{myplace.name}}</h3><hr>
      <h6>{{myplace.description}}</h6><hr>
      <div id="galerija">
        <b-carousel style=" width:100%; height: 700px !important;"
          id="carousel-fade"
          controls
          fade
          indicators
          img-width="1024"
          img-height="480"
          class="carousel-inner"
        >
          <b-carousel-slide
            :img-src="require(`@/assets/${myplace.images[0]}`)"
          ></b-carousel-slide>
          <b-carousel-slide
            :img-src="require(`@/assets/${myplace.images[1]}`)"
          ></b-carousel-slide>
          <b-carousel-slide
            :img-src="require(`@/assets/${myplace.images[2]}`)"
          ></b-carousel-slide>
        </b-carousel>
      </div>
      <br>
    </center>
    </div>
  </div>
</template>

<script>
import places from "@/data/places.js";
import StudentNav from "./StudentNav";

export default {
  name: 'PlaceDetails',
  data(){
    return{
      myplace: {},
      places
    }
  },
  components: {
    StudentNav
  },
  created(){
    var id=Number(this.$route.params.id)
    var place = this.places.find(place=>place.id==id)
    this.myplace = place;
  }
}
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

#content{
  margin: auto;
  padding: 50px 170px 170px 170px;
  align-items: center;
}
#galerija {
 width: 1024px;
 height: 480px;
}

</style>


