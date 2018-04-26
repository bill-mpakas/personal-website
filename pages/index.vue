<template>
    <div class="main-content">
      <div class="left-content">
        <div class="hero">
          <p class="hero__intro">
            Hey,there
          </p>
          <h1 class="hero__heading">I'm Bill Bakas, <br> designer &amp; developer</h1>
          <p class="hero__text">I love to design and code user interfaces, iterate and create user-friendly products.</p>
        </div>
        <div class="cta">
         <nuxt-link class="btn btn--blue" to="about/">More about me</nuxt-link>
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
       display: flex;
       flex-direction: column;
       padding: 40px 20px 0 0;
      }
  }

  

  .left-content {
    display: grid;
    grid-template-rows: 1fr min-content;
    align-items: end;
    grid-template-areas:
    "hero"
    "cta"
  }

  .hero {
    grid-area: hero;
    display: flex;
    flex-flow: column;

    @media screen and (max-width: 48rem) {
      padding-left: 15px;
    }

    h1 {
      margin: 0;
    }

    &__heading {
      font-size: 3rem;
      font-weight: 900;
      @media screen and (max-width: 85.375em) {
        font-size: 2.1rem;
      }
    }

    &__intro {
      margin: 0;
    }

    &__text {
      font-size: 1rem;
      font-weight: 400;
      color: rgba(0,0,0,0.6);
      -webkit-font-smoothing: antialiased;
      @media screen and (max-width: 85.375em) {
        font-size: 1rem;
      }
    }
  }

  .cta {
    grid-area: cta;
    padding-top: 60px;
    padding-bottom: 20px;
    justify-self: center;
  }

  .right-content {
    display: flex;
    justify-items: center;
    padding: 10px;
    align-items: center;
  }

  
</style>





<script>

</script>