<template>
    <div class="main-content">
      <div class="left-content">
        <div class="project-title">
          <h2>Invited</h2>
          <p class="project-title__type">Web Design, Web Development</p>
        </div>
        <div class="project-description">
          <article class="project-description__content">
            Project in Progress. More Info Coming Soon! 
          </article>
          <div class="project-description__tech">
            <h3>Technologies Used</h3>
            <div class="logos">
              <img src="~/assets/icons/html.svg" alt="html5">
              <img src="~/assets/icons/css.svg" alt="css">
              <img src="~/assets/icons/javascript.svg" alt="javascript">
              <img src="~/assets/icons/sketch.svg" alt="sketch">
              <img src="~/assets/icons/laravel.svg" alt="gulp">
              <img src="~/assets/icons/npm.svg" alt="npm">
              <img src="~/assets/icons/git.svg" alt="git">
            </div>
          </div>
        </div>
        <div class="project-cta">
          <!-- <a class="btn btn--blue" href="coffeeshop">Next Project</a> -->
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
               <a class="btn btn--custom" href="#!">Soon!</a>
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

  $page_color: #1391f1;

  .screen-container.cro-case {
    background-image: url('~assets/images/mockups/Invited-Logo-res.svg');
    background-color: $page_color;
    background-position: center; 
  }

  .screen-container.cro-case, .screen-container.email-case, .screen-container.fb-case, .screen-container.ppc-case, .screen-container.seo-case-study, .screen-container.web-design {
    background-size: 80%;
    background-repeat: no-repeat;
    
  }

  .project-description__content {
    text-align: center;
  }

  .right-content {
    background-color: $page_color;
}

.btn {
    
    &--custom {
      font-size: 18px;
      cursor: pointer;
      background-color: $page_color;
    }
  }



  

  

</style>