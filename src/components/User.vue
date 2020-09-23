<template>
  <div id="user">
    <b-card bg-variant="light">
      <b-form-group
        label-cols-lg="5"
        label="Profile Information"
        label-size="lg"
        label-class="font-weight-bold pt-0"
        class="mb-0"
      >
        <b-form-group label-cols-sm="1" label="Username:" label-align-sm="left">
          <b-form-group label-cols-sm="3" :label="user.username" label-align-sm="left"></b-form-group>
        </b-form-group>

        <b-form-group label-cols-sm="1" label="Name:" label-align-sm="left">
            <b-form-group label-cols-sm="3" :label="user.name" label-align-sm="left"></b-form-group>
        </b-form-group>

        <b-form-group label-cols-sm="1" label="Surname:" label-align-sm="left">
          <b-form-group label-cols-sm="3" :label="user.lastname" label-align-sm="left"></b-form-group>
        </b-form-group>

        <b-form-group label-cols-sm="1" label="Phone:" label-align-sm="left">
          <b-form-group label-cols-sm="3" :label="user.phone" label-align-sm="left"></b-form-group>
        </b-form-group>

        <b-form-group label-cols-sm="1" label="Address:" label-align-sm="left">
          <b-form-group label-cols-sm="3" :label="user.address" label-align-sm="left"></b-form-group>
        </b-form-group>

        <b-form-group label-cols-sm="1" label="Role:" label-align-sm="left">
          <b-form-group label-cols-sm="3" :label="user.role" label-align-sm="left"></b-form-group>
        </b-form-group>

        
      </b-form-group>

      <router-link :to="'/'+user.role+'/editprofile'"><b-button class="w-25 mb-3" variant="outline-info">Edit Information</b-button></router-link> 
    </b-card>
  </div>
</template>

<script>
export default {
  name: "User",
  props: ["user"],
};
</script>

<style lang="scss">
</style>


