<template>
  <div>
    <HeaderItem />
    <NavbarItem />
    <div class="row section topspace">
      <div class="col-md-12">
        <p class="lead text-center text-muted" style="color: black;">
          We want share to other with something different, through Our Code. We
          Hope from this way we able to share bigger than now. And we build care
          each other culture
        </p>
      </div>
    </div>
  </div>
</template>

<script>

import NavbarItem from '../components/NavbarItem.vue'
import HeaderItem from '../components/HeaderItem.vue'
export default {
  name: 'AboutPage',
  components: {
    NavbarItem,
    HeaderItem
  }
}
</script>

<style></style>
