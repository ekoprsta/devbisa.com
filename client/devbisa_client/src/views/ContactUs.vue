<template>
  <div>
    <NavbarItem></NavbarItem>
      <div class="container">
        <div class="row">
          <div class="col-md-4 widget">
            <h3 class="widget-title">Contact</h3>
            <div class="widget-body">
              <p>
                +62 8171945<br />
                <a href="mailto:#">info@devbisa.com</a><br />
                <br />
                Komplek DPR MPR RI KAV RI 1
              </p>
            </div>
          </div>

          <div class="col-md-4 widget">
            <h3 class="widget-title">Follow Us</h3>
            <div class="widget-body">
              <p class="follow-me-icons">
                <a href=""><i class="fa fa-twitter fa-2"></i></a>
                <a href=""><i class="fa fa-dribbble fa-2"></i></a>
                <a href=""><i class="fa fa-github fa-2"></i></a>
                <a href=""><i class="fa fa-facebook fa-2"></i></a>
              </p>
            </div>
          </div>

          <div class="col-md-4 widget">
            <h3 class="widget-title">DevBisa.com</h3>
            <div class="widget-body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
                nihil natus explicabo ipsum quia iste aliquid repellat eveniet
                velit ipsa sunt libero sed aperiam id soluta officia asperiores
                adipisci maxime!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
                nihil natus explicabo ipsum quia iste aliquid repellat eveniet
                velit ipsa sunt libero sed aperiam id soluta officia asperiores
                adipisci maxime!
              </p>
            </div>
          </div>
        </div>
        <!-- /row of widgets -->
      </div>
  </div>
</template>

<script>
import NavbarItem from '../components/NavbarItem.vue'
export default {
  name: 'ContactUs',
  components: {
    NavbarItem
  }
}
</script>

<style></style>
