<template>
  <div id="app">
      <navbar></navbar>
      <div class="box">
        <transition name="fade">
          <nuxt /> 
        </transition> 
      </div>
      <ul class="footer">
        <p class="footer__content">Made with ❤️ in Thessaloniki</p>
      </ul>
  </div>
</template>


<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export default {
  components: {
    Navbar,Footer
  },
}
</script>

<style lang="scss" src="../assets/global.scss">
</style>

<style lang="scss" scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
// override if i want the main container
  #app {


    @media screen and (max-width: 48rem) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto auto;
    grid-template-areas:
    "navbar"
    "main"
    "footer";
    }

  }

  .box {
    grid-area:main;
    display: grid;
    width: 85vw;
    align-self: center;
    justify-self:center;
    height: 85vh;
    grid-template-columns: 100%;
    box-shadow: 5px 5px 5px lightgray;

    @media screen and (max-width: 48rem) {
      grid-template-columns: 100%;
      height: auto;
      width:100vw;
    }

    
  }

  


</style>

