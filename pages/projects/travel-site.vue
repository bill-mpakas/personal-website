<template>
    <div class="main-content">
      <div class="left-content">
        <div class="project-title">
          <h2>Travel Site</h2>
          <p class="project-title__type">PSD to HTML</p>
        </div>
        <div class="project-description">
          <article class="project-description__content">
            This was my first web development project back in 2016. I found about an awesome course on Udemy called “Git a developer Job”  by the instructor Brad Schiff. 
This course introduced me to many industry standard technologies such as npm, GIT, ES6, Sass, PostCSS, Gulp and Node helping me grasp a better understanding of the modern web development workflow. 
Up until now, i refer to this particular project because it breaks down the workflow of building a website in a nice and structured way. 
          </article>
          <div class="project-description__tech">
            <h3>Technologies Used</h3>
            <div class="logos">
              <img src="~/assets/icons/html.svg" alt="html5">
              <img src="~/assets/icons/css.svg" alt="css">
              <img src="~/assets/icons/javascript.svg" alt="javascript">
              <img src="~/assets/icons/postcss.svg" alt="postcss">
              <img src="~/assets/icons/gulp.svg" alt="gulp">
              <img src="~/assets/icons/npm.svg" alt="npm">
              <img src="~/assets/icons/git.svg" alt="git">
            </div>
          </div>
        </div>
        <div class="project-cta">
          <a class="btn btn--blue" href="">View Project</a>
        </div>
      </div>
        <div class="right-content slideDown">
            <div class="laptop">
              <div data-ix="image-load" class="service-image no-margin-top" style="opacity: 1;transform: scaleX(1) scaleY(1) scaleZ(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg);transition: opacity 400ms, transform 650ms cubic-bezier(0.77, 0, 0.175, 1);">
              <div data-ix="screen-animation" class="laptop-screen" style="transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); transform-style: preserve-3d; transition: transform 450ms;">
                <div class="screen-container cro-case"></div>
              </div>
              <div class="laptop-base"></div>
              </div>
            </div>  
            <div class="year">
              <nuxt-link to="/projects/coffeeshop"><img src="~assets/images/arrow-down.svg" class="arrow arrow-down"></nuxt-link>
            </div>
        </div>

      </div>
    
    
</template>

<script>
export default {
  layout: 'single'
  
}
</script>




<style lang="scss" scoped>

  $page_color: #625B7E;

  .right-content {
    background-color: $page_color;
}



  

  

</style>