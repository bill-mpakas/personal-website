<template>
    <div class="main-content">
      <div class="left-content">
        <div class="project-title">
          <h2>Deli Project</h2>
          <p class="project-title__type">Web App</p>
        </div>
        <div class="project-description">
          <article class="project-description__content">
            A complete project i worked on while learning from “Learn Node”, a course designed by Wes Bos. This premium training course has a focus on modern Javascript and building a real world application using Node.js as the backend. I really believe that nowadays pursuing whatever interests you from a Javascript Angle is highly valuable and that’s because Javascript is ubiquitous. 
            As an entry front-end developer, i am planning to improve the UI of the application and share it with friends!
          </article>
          <div class="project-description__tech">
            <h3>Technologies Used</h3>
            <div class="logos">
              <img src="~/assets/icons/nodejs.svg" alt="html5">
              <img src="~/assets/icons/javascript.svg" alt="html5">
              <img src="~/assets/icons/pug.svg" alt="html5">
              <img src="~/assets/icons/sass.svg" alt="html5">
              <img src="~/assets/icons/heroku.svg" alt="html5">
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

      </div>
    </div>
</template>

<script>
export default {
  
}
</script>


<style lang="scss" scoped>

  $page_color: #625B7E;

  .main-content {
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 800px) {
      
    }
  }

  .left-content {
    display: grid;
    grid-template-rows: min-content 1fr min-content;
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

  .project-cta {
    padding: 25px;
    text-align: center;
  }

  .right-content {
    background-color: yellow;
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