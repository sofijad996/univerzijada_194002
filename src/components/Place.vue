<template>
  <div id="place">
    
 

  <b-card no-body class="overflow-hidden" style="max-width: 800px; max-height: 200px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img :src="require(`@/assets/${place.images[0]}`)" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body :title="place.name">
          <b-card-text>
            {{place.short_description}}
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>

</div>

</template>

<script>
export default {
  name: 'Place',
  props: ['place']
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


