<template>
    <div class="main-content">
      <div class="left-content">
        <div class="project-title">
          <h2>Kodiko.gr</h2>
          <p class="project-title__type">Logo &amp; Web Design</p>
        </div>
        <div class="project-description">
          <article class="project-description__content">
            Kodiko.gr is the No1 free Legislation Search Engine in Greece. I was assigned to design the logo for the platform and also to design and code the landing page. The logo is presented here and the landing page is to be released soon.
          </article>
          <div class="project-description__tech">
            <h3>Technologies Used</h3>
            <div class="logos">
              <img src="~/assets/icons/html.svg" alt="html5">
              <img src="~/assets/icons/css.svg" alt="css">
              <img src="~/assets/icons/javascript.svg" alt="javascript">
              <img src="~/assets/icons/sass.svg" alt="postcss">
              <img src="~/assets/icons/bootstrap.svg" alt="gulp">
              <img src="~/assets/icons/npm.svg" alt="npm">
              <img src="~/assets/icons/git.svg" alt="git">
            </div>
          </div>
        </div>
        <div class="project-cta">
          <a class="btn btn--blue" href="coffeeshop">Next Project</a>
        </div>
        
      </div>
        <div class="right-content">
            <div class="svg">
              <img src="~/assets/images/mockups/kodiko.svg" alt="html5">
            </div>
             <div class="svg">
               <img src="~/assets/images/mockups/kodiko-full.svg" alt="html5">
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

  $page_color: #343633;

  .svg {
    padding: 10px;
  }

  .right-content {
    background-color: $page_color;
    grid-template-rows: auto auto;
    align-items:center;
    align-content:center;
    justify-content: center;
    text-align:center;
}

.btn {
    
    &--custom {
      border: 1px solid #FAFAFA;
      background-color: $page_color;
    }
  }



  

  

</style>