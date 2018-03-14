<template>
  <div class="grid">
    <div class="container">
      <navbar></navbar>
      <transition name="fade" mode="out-in">
          <nuxt />
      </transition>
    </div>
    <div class="copyright">
      <p>Designed and Developed with 💌 by Bill Bakas</p>
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