<template>
  <div class="wrapper-box">
    <div class="main-content">
      <div class="project">
        <h1 class="project__title">Travel Site</h1>
        <!-- <h3 class="project__subtitle">What I did</h3> -->
        <h4 class="project__subtitle">PSD to HTML</h4>
      </div>
      <div class="description">
        <h3 class="description__title">Project Details</h3>
        <p class="description__content">
          This was my first web development project back in 2016. I found about an awesome course on Udemy called “Git a developer Job”  by the instructor Brad Schiff. 
          This course introduced me to many industry standard technologies such as npm, GIT, ES6, Sass, PostCSS, Gulp and Node helping me grasp a better understanding of the modern web development workflow. 
          Up until now, i refer to this particular project because it breaks down the workflow of building a website in a nice and structured way. 
        </p>
        <div class="tech">
          <h3 class="description__title">Technologies Used</h3>
          <div class="tech__logos">
            <img src="~/assets/icons/html.svg" alt="html5">
            <img src="~/assets/icons/css.svg" alt="html5">
            <img src="~/assets/icons/javascript.svg" alt="html5">
            <img src="~/assets/icons/postcss.svg" alt="html5">
            <img src="~/assets/icons/gulp.svg" alt="html5">
            <img src="~/assets/icons/npm.svg" alt="html5">
            <img src="~/assets/icons/git.svg" alt="html5">
          </div>
        </div>
      </div>
      <div class="cta">
          <a target="_blank" class="btn btn--white" href="https://bill-mpakas.github.io/travel-site/">View Project</a>
      </div>
      <div class="details">
        <img class="product-image" src="~/assets/images/mockups/travel-site.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  $page_color: #625B7E;

  .main-content {
  grid-area: iface;
  background: #FAFAFA;
  box-shadow: 15px 15px 20px lightgray;
  display: grid;
  grid-template-rows: 15% 70% 15%;
  grid-template-columns: 50% 50%;
  grid-template-areas:
  "title  details"
  "description details"
  "cta details"
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
  "cta"
  "details"
}
 }

h1 {
  color: $page_color !important;
}

.project {
  grid-area: title;
}

.description {
  grid-area: description; 
}

.details {
  grid-area: details;
  background-color: yellow;
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

.cta {
  grid-area: cta;
  text-align: center;
}


</style>





<script>

</script>
