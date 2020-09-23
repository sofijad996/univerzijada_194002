<template>
  <div id="organizatorEdit">
    <OrganizatorNav />
    <b-card bg-variant="light">
      <form name="forma">
        <b-form-group
          label-cols-lg="5"
          label="Edit Profile Information"
          label-size="lg"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <b-form-group label-cols-sm="1" label="Username:" label-align-sm="left">
            <b-form-input
              class="w-25 mb-3"
              label-cols-sm="3"
              :value="user.username"
              label-align-sm="left"
              name="Username"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group label-cols-sm="1" label="Name:" label-align-sm="left">
            <b-form-input
              class="w-25 mb-3"
              label-cols-sm="3"
              :value="user.name"
              label-align-sm="left"
              name="Name"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group label-cols-sm="1" label="Surname:" label-align-sm="left">
            <b-form-input
              class="w-25 mb-3"
              label-cols-sm="3"
              :value="user.lastname"
              label-align-sm="left"
              name="Surname"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group label-cols-sm="1" label="Phone:" label-align-sm="left">
            <b-form-input
              class="w-25 mb-3"
              label-cols-sm="3"
              :value="user.phone"
              label-align-sm="left"
              name="Phone"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group label-cols-sm="1" label="Address:" label-align-sm="left">
            <b-form-input
              class="w-25 mb-3"
              label-cols-sm="3"
              :value="user.address"
              label-align-sm="left"
              name="Address"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group label-cols-sm="1" label="Password:" label-align-sm="left">
            <b-form-input class="w-25 mb-3" label-cols-sm="3" label-align-sm="left" required></b-form-input>
          </b-form-group>
          <b-form-group
            label-cols-sm="2"
            label="*All fields are required."
            label-align-sm="left"
            label-size="sm"
            name="Password"
          ></b-form-group>
        </b-form-group>

        <b-button type="submit" @click="editProfile" class="w-25 mb-3" variant="outline-info">Confirm Edit</b-button>
      </form>
    </b-card>
  </div>
</template>

<script>
import OrganizatorNav from "./OrganizatorNav";
import users from "@/data/users.js";
import router from "../router/index";

export default {
  name: "OrganizatorEdit",
  props: ["organizatorEdit"],
  components: {
    OrganizatorNav,
  },
  methods: {
    editProfile() {
        alert("Profile successfully edited.")
        router.push("/organizator");
    },
  },
  data() {
    return {
      users,
    };
  },
  created() {
    var username = localStorage.getItem("prijavljenKorisnik");
    this.username = username;
    this.users = users;

    var user = this.users.find((user) => user.username == this.username);
    this.user = user;
  },
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


