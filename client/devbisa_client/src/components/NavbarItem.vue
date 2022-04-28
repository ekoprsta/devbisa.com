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
          <li class="active"><router-link to='/join'>Join Us</router-link></li>
          <li class="active"><router-link to='/contactus'>Contact Us</router-link></li>
        </ul>
      </div>
      <!--/.nav-collapse -->
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarItem'
}
</script>

<style>
</style>
