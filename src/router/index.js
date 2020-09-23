import Vue from 'vue'
import VueRouter from 'vue-router'
import Organizator from '../views/Organizator.vue'
import Student from '../views/Student.vue'
import Login from '../views/Login.vue'
import Places from '../views/Places.vue'
import PlaceDetails from '../components/PlaceDetails.vue'
import StudentProfile from '../components/StudentProfile.vue'
import OrganizatorProfile from '../components/StudentProfile.vue'
import StudentEdit from '../components/StudentEdit.vue'
import OrganizatorEdit from '../components/OrganizatorEdit.vue'
import GamesAdd from '../components/GamesAdd.vue'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/organizator',
    name: 'organizator',
    component: Organizator
  },
  {
    path: '/student',
    name: 'student',
    component: Student
  },
  {
    path: '/student/places',
    name: 'places',
    component: Places
  },
  {
    path:'/placedetails/:id',
    name:'placedetails',
    component: PlaceDetails
  },
  {
    path: '/student/profile',
    name: 'profile',
    component: StudentProfile
  },
  {
    path: '/organizator/profile',
    name: 'profile',
    component: OrganizatorProfile
  },
  {
    path: '/student/editprofile',
    name: 'studentEdit',
    component: StudentEdit
  },
  {
    path: '/organizator/editprofile',
    name: 'organizatorEdit',
    component: OrganizatorEdit
  },
  {
    path: '/organizator/gamesadd',
    name: 'gamesAdd',
    component: GamesAdd
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
