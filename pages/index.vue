<template>
  <section class="section">
    <div class="hero">
      <h1 style="font-size:90px;">Bill Bakas</h1>
      <div class="line-1"></div>
    </div>
    <div class="container">
      <div class="columns is-blue">
        <div class="column" v-for="server in 4" :key="server">
          <project-card></project-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import ProjectCard from '~/components/ProjectCard.vue'

export default {
  components: {
    AppLogo,
    ProjectCard
  }
}
</script>

<style lang="scss">
  .is-blue {
    border: 4px solid red;
  }
</style>

