<template>
  <div id="app">
      <navbar></navbar>
      <div class="box">
        <transition>
          <nuxt /> 
        </transition> 
      </div>
      <ul class="footer">
        <p>Made with ❤️ in Thessaloniki</p>
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
// override if i want the main container
  #app {

  }

  .box {
    grid-area:main;
    display: grid;
    width:90%;
    align-self: center;
    justify-self:center;
    height: 90%;
    grid-template-columns: 100%;
    // border: 0.5px solid lightgrey;
    box-shadow: 10px 10px 10px lightgray;

    @media screen and (max-width: 680px) {
    display: block;
    grid-template-rows: 100%;
    grid-template-columns: 100%;
    }
  }

  


</style>

