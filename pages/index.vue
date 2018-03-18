<template>
    <div class="main-content">
      <div class="left-content">
        <div class="hero">
          <p class="hero__intro">
            Hey,there
          </p>
          <h1 class="hero__heading">I'm Bill Bakas, <br> a designer &amp; developer</h1>
          <p class="hero__text">I love to design and code user interfaces, <br> iterate and create user-friendly products.</p>
        </div>
        <div class="cta">
         <nuxt-link class="btn btn--white" to="about/">More about me</nuxt-link>
        </div>
      </div>
      <div class="right-content">
        <div class="img-container">
          <img src="~/assets/images/home.jpg" alt="">
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
  $page_color: #625B7E;

  .main-content {
    display: grid;
    grid-template-columns: 50% 50%;

    @media screen and (max-width: 700px) {
        display: block;
      }

  }

  

  .left-content {
    display: grid;
    grid-template-rows: 70% 30%;
    align-items: end;
    grid-template-areas:
    "hero"
    "cta"
  }

  .hero {
    grid-area: hero;
    

    &__heading {
      font-size: 3rem;

      @media screen and (max-width: 700px) {
        font-size: 2rem;
      }
    }
  }

  .cta {
    grid-area: cta;
    justify-self: center;
    align-self: center;
  }

  .right-content {
    background-color: yellow;
  }

  
</style>





<script>

</script>


// <div class="title">
//         <p class="title__intro">Hey, there</p>
//         <h1 class="title__heading">I'm Bill Bakas, <br> a designer &amp; developer</h1>
//         <p class="title__text">I love to design and code user interfaces, <br> iterate and create user-friendly products.</p>
//       </div>
//       <div class="cta">
//         <nuxt-link class="btn btn--white" to="about/">More about me</nuxt-link>
//       </div>
//       <div class="details img2">
//         <!-- <img src="~/assets/images/home.jpg" alt=""> -->
//       </div>