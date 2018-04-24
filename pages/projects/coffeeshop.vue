<template>
    <div class="main-content">
      <div class="left-content">
        <div class="project-title">
          <h2>CoffeeShop Website XY-Grid</h2>
          <p class="project-title__type">PSD to HTML</p>
        </div>
        <div class="project-description">
          <article class="project-description__content">
            After learning more and more about UI frameworks, i decided to jump into Foundation by ZURB which gives you a nice starting point to build static websites. It is similar to Bootstrap but back then i liked more the documentation of Foundation. So i built a static website for a fictional coffeeshop using modern technologies such as Flexbox, Gulp, Sass and Handlebars. Overall, it was a really fun project that really showed me the power of front end frameworks.
          </article>
          <div class="project-description__tech">
            <h3>Technologies Used</h3>
            <div class="logos">
              <img src="~/assets/icons/html.svg" alt="html5">
              <img src="~/assets/icons/css.svg" alt="css">
              <img src="~/assets/icons/javascript.svg" alt="javascript">
              <img src="~/assets/icons/sass.svg" alt="postcss">
              <img src="~/assets/icons/gulp.svg" alt="gulp">
              <img src="~/assets/icons/handlebars.svg" alt="npm">
              <img src="~/assets/icons/foundation.svg" alt="git">
            </div>
          </div>
        </div>
        <div class="project-cta">
          <a class="btn btn--blue" href="/projects/deli-project">Next Project</a>
        </div>
        
      </div>
        <div class="right-content">
            <div class="laptop">
              <div data-ix="image-load" class="service-image no-margin-top" style="opacity: 1;transform: scaleX(1) scaleY(1) scaleZ(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg);transition: opacity 400ms, transform 650ms cubic-bezier(0.77, 0, 0.175, 1);">
              <div data-ix="screen-animation" class="laptop-screen" style="transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); transform-style: preserve-3d; transition: transform 450ms;">
                <div class="screen-container cro-case"></div>
              </div>
              <div class="laptop-base"></div>
              </div>
            </div>
             <div class="year">
               <a class="btn btn--custom" target="blank" href="https://bill-mpakas.github.io/CoffeeShop-Site-XY-Grid/">View Project</a>
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

  $page_color: #583520;

  .screen-container.cro-case {
    background-image: url('~assets/images/mockups/coffee.png');
  }

  .right-content {
    background-color: $page_color;
}

.btn {
    
    &--custom {
      border: 1px solid #FAFAFA;
      background-color: $page_color;
    }
  }



  

  

</style>