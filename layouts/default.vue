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

<style lang="scss" src="../assets/global.scss"></style>