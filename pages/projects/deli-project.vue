<template>
    <div class="main-content">
      <div class="left-content">
        <div class="project-title">
          <h2>Deli-Project</h2>
          <p class="project-title__type">Web App</p>
        </div>
        <div class="project-description">
          <article class="project-description__content">
            A complete project i worked on while learning from “Learn Node”, a course designed by Wes Bos. This premium training course has a focus on modern Javascript and building a real world application using Node.js as the backend. I really believe that nowadays pursuing whatever interests you from a Javascript Angle is highly valuable and that’s because Javascript is ubiquitous. As an entry front-end developer, i am planning to improve the UI of the application and share it with friends!
          </article>
          <div class="project-description__tech">
            <h3>Technologies Used</h3>
            <div class="logos">
              <img src="~/assets/icons/nodejs.svg" alt="html5">
              <img src="~/assets/icons/mongodb.svg" alt="mongodb">
              <img src="~/assets/icons/javascript.svg" alt="javascript">
              <img src="~/assets/icons/pug.svg" alt="pug">
              <img src="~/assets/icons/sass.svg" alt="sass">
              <img src="~/assets/icons/heroku.svg" alt="heroku">
            </div>
          </div>
        </div>
        <div class="project-cta">
          <nuxt-link class="btn btn--blue" to="/projects/elke-uom">Next project</nuxt-link>
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
               <a class="btn btn--custom" target="blank" href="https://deli-test-project.herokuapp.com/">View Project</a>
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

  $page_color: #45b1e8;

  .screen-container.cro-case {
    background-image: url('~assets/images/mockups/deli-project.jpg');
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