<template>
    <div class="main-content">
      <img src="~assets/images/arrow-up.svg" class="arrow arrow-up">
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
              <img src="~/assets/icons/css.svg" alt="html5">
              <img src="~/assets/icons/javascript.svg" alt="html5">
              <img src="~/assets/icons/postcss.svg" alt="html5">
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
            <div class="laptop">
              <div data-ix="image-load" class="service-image no-margin-top" style="opacity: 1;transform: scaleX(1) scaleY(1) scaleZ(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg);transition: opacity 400ms, transform 650ms cubic-bezier(0.77, 0, 0.175, 1);">
              <div data-ix="screen-animation" class="laptop-screen" style="transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); transform-style: preserve-3d; transition: transform 450ms;">
                <div class="screen-container cro-case"></div>
              </div>
              <div class="laptop-base"></div>
            </div>
            </div>
        </div>
        <nuxt-link to="/projects/coffeeshop"><img src="~assets/images/arrow-down.svg" class="arrow arrow-down"></nuxt-link>
      </div>
    
</template>

<script>
export default {
  layout: 'single'
  
}
</script>




<style lang="scss" scoped>

  $page_color: #625B7E;

  .main-content {
    display: grid;
    position: relative;
    grid-template-columns: 50% 50%;


  }

  

  .left-content {
    display: grid;
    grid-template-rows: min-content 1fr min-content;
  }


  .right-content {
    background-color: $page_color;
    display: flex;
    justify-content: center;
    align-items: center;
    
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

.laptop {
  padding: 2rem;
  width: 500px;
}

.screen-container.cro-case {
  background-image: url('~assets/images/thumbnails/travel-site-compressor.gif');
}
.screen-container.cro-case, .screen-container.email-case, .screen-container.fb-case, .screen-container.ppc-case, .screen-container.seo-case-study, .screen-container.web-design {
  background-position: 50% 0;
  background-size: cover;
  }
.screen-container {
  width: 100%;
  min-height: 230px;
  background-color: #fff;
}

.laptop-screen {
  position: relative;
  width: 90%;
  max-width: 450px;
  padding: 15px;
  border-radius: 11px;
  background-color: #e6e6e6;
  box-shadow: inset 0 1px 0 0 hsla(0,0%,83%,.5);
  -webkit-transform: perspective(1500px);
  transform: perspective(1500px);
  -webkit-transform-origin: 50% 100%;
  -ms-transform-origin: 50% 100%;
  transform-origin: 50% 100%;
}

.laptop-base {
  width: 100%;
  height: 12px;
  max-width: 480px;
  border-top: 3px solid #ebebeb;
  border-bottom-left-radius: 250px;
  border-bottom-right-radius: 250px;
  background-color: #ddd;
  background-image: -webkit-linear-gradient(270deg,#bebebe,#929292 99%);
  background-image: linear-gradient(180deg,#bebebe,#929292 99%);
  box-shadow: 0 8px 5px -4px rgba(0,0,0,.59), 0 11px 22px -2px rgba(0,0,0,.66);
}



.project-cta {
  padding: 25px;
  text-align: center;
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