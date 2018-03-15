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
  justify-items: center;
  align-items: center;
  grid-template-areas: 
  "iface";
  display: grid;
}

.main-content {
  grid-area: iface;
  width: 90vw;
  height: 80vh;
  background: #FAFAFA;
  box-shadow: 15px 15px 20px lightgray;
  display: grid;
  grid-template-columns: 50% auto;
  grid-template-areas:
  "title details"
  "description details"
  "description details"
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

