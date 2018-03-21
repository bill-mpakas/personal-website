<template>
    <div class="main-content">
      <div class="left-content">
        <div class="project-title">
          <h2>CoffeeShop Website</h2>
          <p class="project-title__type">PSD to HTML</p>
        </div>
        <div class="project-description">
          <article class="project-description__content">
            After learning more and more about UI frameworks, i decided to jump into Foundation by ZURB which gives you a nice starting point to build static websites. 
            It is similar to Bootstrap but back then i liked more the documentation of Foundation. 
            So i built a static website for a fictional coffeeshop using modern technologies such as Flexbox, Gulp, Sass and Handlebars. Overall, it was a really fun project that really showed me the power of front end frameworks.
          </article>
          <div class="project-description__tech">
            <h3>Technologies Used</h3>
            <div class="logos">
              <img src="~/assets/icons/html.svg" alt="html5">
              <img src="~/assets/icons/css.svg" alt="html5">
              <img src="~/assets/icons/javascript.svg" alt="html5">
              <img src="~/assets/icons/foundation.svg" alt="html5">
              <img src="~/assets/icons/gulp.svg" alt="html5">
              <img src="~/assets/icons/npm.svg" alt="html5">
              <img src="~/assets/icons/git.svg" alt="html5">
            </div>
          </div>
        </div>
        <div class="project-cta">
          <a class="btn btn--blue" href="">View Project</a>
        </div>
      </div>
      <div class="right-content">

      </div>
    </div>
</template>

<script>
export default {
  
}
</script>


<style lang="scss" scoped>

  $page_color: #625B7E;

  .main-content {
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 800px) {
      
    }
  }

  .left-content {
    display: grid;
    grid-template-rows: min-content 1fr min-content;
  }

  .project-title {
    text-align: center;

    &__type {
      font-style: italic;
    }
  }

  .project-description {
    display: grid;
    align-items: center;
    grid-template-rows: 2fr 1fr ;

    &__content {

      @media screen and (min-width: 85.375em) {
        font-size: 1.2rem;
      }

      padding: 0 20px 0 20px;
      font-size: 1rem;
      line-height: 1.8;
    }

    &__tech {
      text-align: center;
      
      
    }
  }

  .logos {
    display: grid;
    grid-gap: 2.5rem;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(min-content, 30px));

    @media screen and (min-width: 85.375em) {
        font-size: 1.2rem;
        grid-template-columns: repeat(auto-fit, minmax(min-content, 35px));
      }
  }

  .project-cta {
    padding: 25px;
    text-align: center;
  }

  .right-content {
    background-color: yellow;
  }

  

</style>


<!-- <div class="tech__logos">
            <img src="~/assets/icons/html.svg" alt="html5">
            <img src="~/assets/icons/css.svg" alt="html5">
            <img src="~/assets/icons/javascript.svg" alt="html5">
            <img src="~/assets/icons/postcss.svg" alt="html5">
            <img src="~/assets/icons/gulp.svg" alt="html5">
            <img src="~/assets/icons/npm.svg" alt="html5">
            <img src="~/assets/icons/git.svg" alt="html5">
          </div> -->