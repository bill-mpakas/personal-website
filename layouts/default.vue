<template>
  <div id="app">
      <navbar></navbar>
      <div class="box">
        <transition name="fade" mode="out-in">
            <nuxt />
        </transition>
      </div>
      <!-- <footer></footer> -->
  </div>
</template>


<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export default {
  // middleware: 'log',
  components: {
    Navbar,Footer
  }
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
    grid-template-columns: 100%;
    border: 2px solid blue;

    @media screen and (max-width: 680px) {
    display: block;
    grid-template-rows: 100%;
    grid-template-columns: 100%;
    }
  }


</style>

