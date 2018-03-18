<template>
  <div id="app">
      <navbar></navbar>
      <transition name="fade" mode="out-in">
          <nuxt />
      </transition>
  </div>
</template>


<script>
import Navbar from '@/components/Navbar'
export default {
  // middleware: 'log',
  components: {
    Navbar
  }
}
</script>

<style lang="scss" src="../assets/global.scss">
</style>

<style lang="scss">

  #app {
    display: grid;
    grid-template-rows: 500px auto;
  }
</style>

