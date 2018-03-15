<template>
  <div id="app">
    <div class="wrapper">
      <navbar></navbar>
      <transition name="fade" mode="out-in">
          <nuxt />
      </transition>
    </div>
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
  .main-content {
    grid-area: iface;
    width: 90vw;
    height: 80vh;
    background: #FAFAFA;
    box-shadow: 15px 15px 20px lightgray;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 90% auto;
}
</style>

