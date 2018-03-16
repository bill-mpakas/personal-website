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
      </div>
      <div class="tech">
          <h3 class="description__title">Technologies Used</h3>
          <div class="tech__logos">
            <img src="~/assets/logos/html.svg" alt="">
            <img src="~/assets/logos/html.svg" alt="">
            <img src="~/assets/logos/html.svg" alt="">
            <img src="~/assets/logos/html.svg" alt="">
            <img src="~/assets/logos/html.svg" alt="">
          </div>
      </div>
      <div class="details product-image">
        
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
  grid-template-rows: auto 2fr 1fr;
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
  grid-template-rows: auto 2fr 1fr 1fr;
  grid-template-columns: 100%;
  grid-template-areas:
  "title"
  "description"
  "details"
  "tech"
}
 }

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
    padding-left: 20px;
    padding-right: 20px;
    text-align: left;
    
  }
}

.tech {
  grid-area: tech;

  &__logos {
    padding: 20px;
    display: grid;
    grid-gap: 40px;
    grid-template-columns: repeat(auto-fit, minmax(20px,50px));
    justify-content: center;
  }
}

.details {
  grid-area: details;
  background-color: yellow;
}

.product-image {
  background: url('~/assets/images/card.jpg');
  background-size: cover;
  background-position: 50%;
  
}







</style>





<script>

</script>
