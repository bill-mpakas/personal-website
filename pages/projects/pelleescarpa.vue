<template>
    <div class="main-content">
      <div class="left-content">
        <div class="project-title">
          <h2>Pelleescarpa.gr</h2>
          <p class="project-title__type">Ecommerce Website</p>
        </div>
        <div class="project-description">
          <article class="project-description__content">
            Eshop for a small business shoe store. Having a grasp of Wordpress, me and my colleague/partner Alexandros builded their Online Presence using Wordpress and WooCommerce. From Seo techniques to photography alognside with the 
            development, we strongly believe that now is the time to for small businesses to focus on E-Commerce and that is the main reason we took on this challenge.
          </article>
          <div class="project-description__tech">
            <h3>Technologies Used</h3>
            <div class="logos">
              <img src="~/assets/icons/wordpress.svg" alt="wordpress">
              <img src="~/assets/icons/woocommerce.svg" alt="woocommerce">
              <img src="~/assets/icons/html.svg" alt="html">
              <img src="~/assets/icons/css.svg" alt="css">
            </div>
          </div>
        </div>
        <div class="project-cta">
          <a class="btn btn--blue" href="/projects/invited">Next Project</a>
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
               <a class="btn btn--custom" target="blank" href="https://pelleescarpa.gr">View Project</a>
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

  .screen-container.cro-case {
    background-image: url('~assets/images/mockups/pelleescarpa.gr.jpg');
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