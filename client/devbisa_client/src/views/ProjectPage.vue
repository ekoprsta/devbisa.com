<template>
  <div>
    <NavbarItem />
    <div class="container">
      <div class="row section featured topspace">
        <h2 class="section-title"><span>Running Projects</span></h2>
        <div class="row">
          <div class="col-sm-4 col-md-4" v-for="proj in this.$store.state.projectsActive" :key="proj.id">
            <h3 class="text-center">{{proj.name}}</h3>
            <p>
            {{proj.description}}
            </p>
            <p class="text-center">
              <a href="#" class="btn btn-action" @click.prevent="handleAddProject(proj.id)">Join this Projecct</a>
            </p>
          </div>
        </div>
      </div>
      <div class="row section recentworks topspace">
        <h2 class="section-title"><span>Complete Projects</span></h2>
        <div class="thumbnails recentworks row">
          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4" v-for="proj in this.$store.state.projectComplete" :key="proj.id">
            <a class="thumbnail" href="sidebar-right.html">
              <span class="img">
                <img :src="proj.imageUrl" alt="" />
                <span class="cover"
                  ></span
                >
              </span>
              <span class="title">{{proj.name}}</span>
            </a>
            <h4></h4>
            <p></p>
          </div>
        </div>
      </div>
    </div>
    <HFooter></HFooter>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import axios from 'axios'
import HFooter from 'vue-hacktiv8-footer'
import NavbarItem from '../components/NavbarItem.vue'
export default {
  name: 'ProjectPage',
  components: {
    NavbarItem,
    HFooter
  },
  methods: {
    handleAddProject (id) {
      if (!localStorage.getItem('accesstoken')) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please Login first'
        })
        this.$router.push({ name: 'JoinPage' })
      } else {
        axios({
          url: 'http://localhost:3000/projectmember',
          method: 'POST',
          headers: { accesstoken: localStorage.getItem('accesstoken') },
          data: { ProjectId: id, role: 'Project Member' }
        })
          .then((response) => {
            Swal.fire({
              icon: 'success',
              title: 'OK!',
              text: 'Success Enroll to Project'
            })
            this.$router.push({ name: 'home' })
          })
          .catch((error) => {
            console.log(error)
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'You already on this project'
            })
          })
      }
    }
  },
  computed: {
    projectAllActive () {
      return this.$store.state.projectsActive
    },
    projectAllDone () {
      return this.$store.state.projectComplete
    }
  },
  created () {
    this.$store.dispatch('getAllProjects')
  }
}
</script>

<style></style>
