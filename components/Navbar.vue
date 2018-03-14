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

<style lang="scss">
  .menu-items {
    display: grid;
    grid-gap: 10px;
    padding: 0;
    list-style: none;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    a {
      background: yellow;
      display: block;
      text-decoration: none;
      padding: 10px;
      text-align: center;
      color: black;
      text-transform: uppercase;
      font-size: 20px;
    }
  }
</style>








