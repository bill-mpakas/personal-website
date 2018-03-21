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

    h1 {
      margin: 0;
    }

    &__heading {
      font-size: 3rem;

      @media screen and (max-width: 85.375em) {
        font-size: 2.1rem;
      }
    }

    &__intro {
      margin: 0;
    }

    &__text {
      font-size: 1.2rem;

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