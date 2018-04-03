<template>
    <div class="main-content">
      <div class="left-content">
        <div class="hero">
          <p class="hero__intro">
            Hey,there
          </p>
          <h1 class="hero__heading">I'm Bill Bakas, <br> a designer &amp; developer</h1>
          <p class="hero__text">I love to design and code user interfaces, iterate and create user-friendly products.</p>
        </div>
        <div class="cta">
         <nuxt-link class="btn btn--white" to="about/">More about me</nuxt-link>
        </div>
      </div>
      <div class="right-content">
        <div class="img-container">
          <img src="~/assets/images/Workspace4-coffee.svg" alt="">
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
  $page_color: #625B7E;

  .main-content {
    display: grid;
    grid-template-columns: 50% 50%;

    @media screen and (max-width: 800px) {
       display: block;
      }
  }

  

  .left-content {
    
  }

  .right-content {
    
  }

  

  
</style>





<script>

</script>