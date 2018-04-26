<template>
    <div class="main-content">
      <div class="left-content">
        <div class="project-title">
          <h2>Elke Uom</h2>
          <p class="project-title__type">Custom Wordpress Development</p>
        </div>
        <div class="project-description">
          <article class="project-description__content">
            I really like Wordpress. Wordpress is also popular. In fact 30% of all sites now run on WordPress. So, after taking many courses on Wordpress theme development, i was assigned to build the website for the research committee of my university. Our main focus was to store the data on the website well organized and easy to find. Therefore, we leveraged the WP Rest Api for searching content on the website using Javascript and also many useful features wordpress offers such as Custom Taxonomies and Advanced Custom Fields.  
          </article>
          <div class="project-description__tech">
            <h3>Technologies Used</h3>
            <div class="logos">
              <img src="~/assets/icons/html.svg" alt="html5">
              <img src="~/assets/icons/css.svg" alt="css">
              <img src="~/assets/icons/javascript.svg" alt="javascript">
              <img src="~/assets/icons/wordpress.svg" alt="postcss">
              <img src="~/assets/icons/sass.svg" alt="gulp">
              <img src="~/assets/icons/npm.svg" alt="npm">
              <img src="~/assets/icons/git.svg" alt="git">
            </div>
          </div>
        </div>
        <div class="project-cta">
          <nuxt-link class="btn btn1--blue" to="/projects/pelleescarpa">Next project</nuxt-link>
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
               <a class="btn btn--custom" target="blank" href="https://elke.uom.gr/">View Project</a>
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

  $page_color: #173f58;

  .screen-container.cro-case {
    background-image: url('~assets/images/mockups/elke-uom.jpg');
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