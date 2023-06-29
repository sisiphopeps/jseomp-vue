<template>
  <div class="home">
    <NavbarComp/>
    <HelloWorld/>
    <router-view/>
    <FooterComp/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarComp from "../components/NavbarComp.vue"
import FooterComp from "../components/FooterComp.vue"
import HelloWorld from "../components/HelloWorld.vue"
export default {
  name: 'HomeView',
  components: {
    NavbarComp, FooterComp,HelloWorld
  }
}
</script>
