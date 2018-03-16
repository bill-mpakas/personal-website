<template>
  <div class="wrapper-box">
    <div class="main-content">
      <div class="project">
        <h1 class="project__title">CoffeeShop Website XY-Grid</h1>
        <!-- <h3 class="project__subtitle">What I did</h3> -->
        <h4 class="project__subtitle">PSD to HTML</h4>
      </div>
      <div class="description">
        <h3 class="description__title">Project Details</h3>
        <p class="description__content">
          After learning more and more about UI frameworks, i decided to jump into Foundation by ZURB which gives you a nice starting point to build static websites. It is similar to Bootstrap but back then i liked more the documentation of Foundation. 
          So i built a static website for a fictional coffeeshop using modern technologies such as Flexbox, Gulp, Sass and Handlebars. 
          Overall, it was a really fun project that really showed me the power of front end frameworks.
        </p>
        <div class="tech">
          <h3 class="description__title">Technologies Used</h3>
          <div class="tech__logos">
            <img src="~/assets/icons/html.svg" alt="html5">
            <img src="~/assets/icons/css.svg" alt="html5">
            <img src="~/assets/icons/javascript.svg" alt="html5">
            <img src="~/assets/icons/foundation.svg" alt="html5">
            <img src="~/assets/icons/sass.svg" alt="html5">
            <img src="~/assets/icons/gulp.svg" alt="html5">
            <img src="~/assets/icons/npm.svg" alt="html5">
            <img src="~/assets/icons/handlebars.svg" alt="html5">
            <img src="~/assets/icons/git.svg" alt="html5">
          </div>
        </div>
        <div class="description__cta">
          <a target="_blank" class="btn btn--white" href="https://bill-mpakas.github.io/CoffeeShop-Site-XY-Grid/">View Project</a>
        </div>
      </div>
      <div class="details">
        <img class="product-image" src="~assets/images/mockups/travel-site.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

  /**
    Overrides 
  */
  $page_color: #301d12;
  h1,h2,h3,h4 {
  color: $page_color !important;
  }

  .btn {
    background-color: $page_color;
    font-size: 0.9rem;
  }

  .main-content {
  grid-area: iface;
  background: #FAFAFA;
  box-shadow: 15px 15px 20px lightgray;
  display: grid;
  grid-template-rows: 1fr auto 1fr;
  grid-template-columns: repeat(auto-fill, minmax(250px, 50%));
  grid-template-areas:
  "title  details"
  "description details"
  "tech details"
}

@media (max-width: 900px) { 
  .main-content {
  grid-area: iface;
  background: #FAFAFA;
  box-shadow: 15px 15px 20px lightgray;
  display: grid;
  grid-template-rows: auto auto auto auto;
  grid-template-columns: 100%;
  grid-template-areas:
  "title"
  "description"
  "details"
  "tech"
}
 }


 /**
    Overrides 
  */

.project {
  grid-area: title;
  padding-top: 20px;
  text-align: center;

  &__title {
    
  }

  &__subtitle {
    padding: 5px;
  }
}

.description {
  grid-area: description;
  text-align: center;
  
  &__title {
    text-align: center;
  }

  &__content {
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    text-align: left;
  }

  &__cta {

    @media (max-width: 900px) {
      padding-top: 20px;
    }
    padding-top: 60px;
  }
}

.tech {
  grid-area: tech;

  &__logos {
    
    display: grid;
    grid-gap: 40px;
    grid-template-columns: repeat(auto-fit, minmax(20px,35px));
    justify-content: center;
  }
}

.details {
  grid-area: details;
  background-color: $page_color;
  
}







</style>





<script>

</script>
