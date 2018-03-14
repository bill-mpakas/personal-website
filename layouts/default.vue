<template>
  <div id="app">
    <div class="container">
      <div class="inner">
        <nav>
          <nuxt-link to="/" id="logo">Bill Bakas</nuxt-link>
          <ul>
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li><nuxt-link to="/about">About</nuxt-link></li>
          </ul>
        </nav>
        <transition name="fade" mode="out-in">
          <nuxt />
        </transition>
      </div>
    </div>

  </div>
</template>

<script>

</script>

<style lang="scss" src="../assets/global.scss">

</style>