<template>
  <nav class="navbar navbar-default navbar-sticky">
    <div class="container-fluid">
      <div class="navbar-header">
        <button
          type="button"
          class="navbar-toggle"
          data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1"
        >
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span> <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>

      <div class="navbar-collapse collapse">
        <ul class="nav navbar-nav">
          <li class="active"><router-link to='/'>Home</router-link></li>
          <li class="active"><router-link to='/projects'>Our Projects</router-link></li>
          <li v-if="this.$store.state.login === false" class="active"><router-link to='/join'>Join Us</router-link></li>
          <li class="active"><router-link to='/contactus'>Contact Us</router-link></li>
          <li v-if="this.$store.state.login === true" class="active"><router-link to='/myproject'>My Project</router-link></li>
          <li v-if="this.$store.state.login === true" class="active" @click.prevent="handleLogut"><router-link to='/'>Log Out</router-link></li>
        </ul>
      </div>
      <!--/.nav-collapse -->
    </div>
  </nav>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'NavbarItem',
  methods: {
    handleLogut () {
      localStorage.removeItem('accesstoken')
      localStorage.removeItem('email')
      Swal.fire({
        icon: 'success',
        title: 'OK!',
        text: 'Log Out Success'
      })
      this.$store.dispatch('getLoginValue')
      this.$router.push({ name: 'home' })
    },
    created () {
      this.$store.dispatch('getLoginValue')
    }
  }
}
</script>

<style>
</style>
