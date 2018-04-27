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

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
// override if i want the main container
  #app {
    


    @media screen and (max-width: 48rem) {
     display: flex;
     flex-direction: column;
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
    box-shadow: 3px 3px 3px 5px rgba(0, 0, 0, 0.05);

    @media screen and (max-width: 48rem) {
      display: block;
      width: 100%;
      box-shadow: none;
      align-self: center;
      justify-self:center;
      height: 100%;
    }

    

    
  }

  


</style>

