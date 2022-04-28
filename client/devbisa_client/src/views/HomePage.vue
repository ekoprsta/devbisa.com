<template>
  <div id="header">
    <HeaderItem />
    <NavbarItem />
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 mx-auto">
            <!-- CUSTOM BLOCKQUOTE -->
            <blockquote
              class="blockquote blockquote-custom bg-white p-5 shadow rounded"
            >
              <div class="blockquote-custom-icon bg-info shadow-sm">
                <i class="fa fa-quote-left text-white"></i>
              </div>
              <h4 class="mb-0 mt-2 font-italic">
                "We want share to other with something different, through Our Code. We
                Hope from this way we able to share bigger than now. And we build care
                each other culture"
              </h4>
              <footer class="blockquote-footer pt-4 mt-4 border-top">
                DevBisa.com
                <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
            <!-- END -->
          </div>
        </div>
      </div>
    </section>
    <HFooter></HFooter>
  </div>
</template>

<script>
import HeaderItem from '../components/HeaderItem.vue'
import NavbarItem from '../components/NavbarItem.vue'
import HFooter from 'vue-hacktiv8-footer'
export default {
  name: 'HomePage',
  components: {
    HeaderItem,
    NavbarItem,
    HFooter
  },
  created () {
    this.$store.dispatch('getLoginValue')
  }
}
</script>

<style></style>
