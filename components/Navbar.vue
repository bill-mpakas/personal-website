<template>
       <ul class="navigation-menu">
          <li class="navigation-item"><nuxt-link to="/">Home</nuxt-link></li>
          <li class="navigation-item"><nuxt-link to="/about">About</nuxt-link></li>
          <li class="navigation-item"><nuxt-link to="/projects">Projects</nuxt-link></li>
          <li class="navigation-item"><nuxt-link to="/contact">Contact</nuxt-link></li>
          <!-- <li class="navigation-item"><nuxt-link to="/blog">Blog</nuxt-link></li> -->
      </ul>
</template>

<style lang="scss" scoped>

  .navigation-menu {
    grid-area: navbar;
    list-style: none;
    padding-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .navigation-item {
    margin: 0 8px;

    a {
      text-decoration: none;
      color: rgba(0,0,0,0.7);
    }

    a:hover {
      color: rgba(0,0,0,0.7);
      text-decoration: line-through;
    }
  }
</style>








