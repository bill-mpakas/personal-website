<template>
		<nav class="menu">
       <ul class="menu-items">
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/about">About</nuxt-link></li>
        <li><nuxt-link to="/projects">Projects</nuxt-link></li>
        <li><nuxt-link to="/contact">Contact</nuxt-link></li>
      </ul>
    </nav>
</template>

<style lang="scss" scoped>
  .menu ul {
    display: grid;
    justify-items: start;
    list-style: none;
    grid-gap: 20px;
    grid-auto-columns: auto;
    grid-template-columns: repeat(auto-fill, minmax(40px, auto));
    a {
      display: block;
      text-decoration: none;
      text-align: center;
      color: black;
      text-transform:lowercase;
      font-size: 14px;
    }

    li {
      
    }
  }
</style>








