<template>
  <div>
    <navbar></navbar>
    <nuxt/>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar'
  import ProjectCard from '../components/ProjectCard'

  export default {
    components: {
      Navbar,ProjectCard
    }
  }
</script>