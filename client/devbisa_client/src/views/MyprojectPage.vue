<template>
  <div>
    <NavbarItem></NavbarItem>
      <div class="row section featured topspace">
        <h2 class="section-title"><span>Your Running Projects</span></h2>
        <div class="row">
          <div class="col-sm-4 col-md-4" v-for="proj in this.$store.state.projectUser" :key="proj.id">
            <h3 class="text-center">{{proj.name}}</h3>
            <p>
            {{proj.description}}
            </p>
          </div>
        </div>
      </div>
    <HFooter></HFooter>
  </div>
</template>

<script>
import NavbarItem from '../components/NavbarItem.vue'
import HFooter from 'vue-hacktiv8-footer'
export default {
  name: 'MyprojectPage',
  components: {
    NavbarItem,
    HFooter
  },
  computed: {
    foodUser () {
      return this.$store.state.projectUser
    }
  },
  created () {
    this.$store.dispatch('getProjectUser')
    this.$store.dispatch('getLoginValue')
    console.log(this.$store.state.projectUser)
  }
}
</script>

<style></style>
