<template>
  <div id="app">
      <navbar></navbar>
      <div class="box">
        <transition name="fade">
          <nuxt /> 
        </transition> 
      </div>
      <div class="footer">
        <p class="footer__content">Made with ❤️ in Thessaloniki</p>
      </div>
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
    width: 93vw;
    align-self: center;
    justify-self:center;
    height: 90vh;
    grid-template-columns: 100%;
    // border: 0.5px solid lightgrey;
    box-shadow: 3px 3px 3px 5px rgba(0, 0, 0, 0.05);

    @media screen and (max-width: 48rem) {
      display: block;
      width: 100%;
      box-shadow: none;
      align-self: center;
      justify-self:center;
      height: 100%;
    }

    
    @media screen and (max-height: 1140px) {
      width: 90vw;
      height: 90vh;
    }

    
  }

  


</style>

