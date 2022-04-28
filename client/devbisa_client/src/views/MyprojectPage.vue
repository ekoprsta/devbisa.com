<template>
  <div>
    <NavbarItem></NavbarItem>
      <div class="row section featured topspace">
        <h2 class="section-title"><span>Your Running Projects</span></h2>
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
  created () {
  }
}
</script>

<style></style>
