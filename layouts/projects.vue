<template>
  <div id="app">
      <navbar></navbar>
      <div class="box">
        <transition name="fade">
          <nuxt /> 
        </transition> 
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
    width: 85vw;
    align-self: center;
    justify-self:center;
    height: 85vh;
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

    @media screen and (max-height: 71.250em) {
      height: 90vh;
      width: 88vw;
    }

    
  }

  


</style>

