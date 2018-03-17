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

.wrapper-box {
  display: grid;
  padding-left: 20px;
  padding-right: 20px;
  grid-template-rows: 80vh;
  grid-template-areas: 
  "iface";
}

.main-content {
  grid-area: iface;
  display: grid;
  grid-template-columns: 100%;
}

@media (max-width: 900px) { 
  .main-content {
  grid-area: iface;
  display: grid;
  background: red;
  box-shadow: 15px 15px 20px lightgray;
  grid-template-rows: auto auto auto auto;
  grid-template-columns: 100%;
  }
}

.details {
  grid-area: details;
  justify-items: center;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
  display: grid;
  grid-template-columns: auto;
}

.description {
  grid-area: description;
  min-height: 40vh;
}
</style>

