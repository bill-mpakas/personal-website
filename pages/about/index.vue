<template>
    <div class="main-content">
     <div class="left-content">
          <div class="avatar">
            <div class="avatar__img">
              <img src="~/assets/images/profile_pic.jpg" alt="Profile-pic">
            </div>
            <div class="avatar__social">
              <a href="https://www.linkedin.com/in/vasileios-bakas/" target="_blank"><img src="~/assets/icons/social/linkedin.svg" height="30px" width="30px" alt="linkedin"></a>
              <a href="https://twitter.com/bill_bakas" target="_blank"><img src="~/assets/icons/twitter.svg" height="30px" width="30px" alt="twitter"></a>
              <a href="https://www.facebook.com/vasilis.bakas" target="_blank"><img src="~/assets/icons/facebook.svg" height="30px" width="30px" alt="facebook"></a>
              <a href="https://github.com/bill-mpakas" target="_blank"><img src="~/assets/icons/github.svg" height="30px" width="30px" alt="github"></a>
              <a href="https://codepen.io/billlakos/" target="_blank"><img src="~/assets/icons/social/codepen.svg" height="30px" width="30px" alt="codepen"></a>
              </div>
          </div>
          <div class="bio">
            <h3 class="bio__intro">About me</h3>
            <p class="bio__main">
              Hi, I’m Bill -  an openminded morning person, team player and an aspiring entrepreneur. I am based in Thessaloniki but i enjoy travelling, exploring new places and meeting new people. <br>
              I have graduated from school at 2010 and started my studies in computer science at the Applied Informatics department of University of Macedonia. Just right after my graduation at 2015 i started my curious learning journey focusing on my passion in design/development. <br>
              In my free time, i play &#127936; and participate in local running events. <br>
              If you would like to find out more about my educational and professional background, click the button below to download my Resume
            </p>
          </div>
          <div class="cta">
            <nuxt-link class="btn btn--blue" target="_blank" to="/pdf/Bakas_Vasileios_CV_eng.pdf">Download CV</nuxt-link>
            <nuxt-link class="btn btn--blue" to="/projects" exact>View Projects</nuxt-link>
          </div>
      </div>
      <div class="right-content">
        <div class="skills">
          <h2 class="skills__title">What I do</h2>
        </div>
         <div class="skills-card">
           <div class="card">
              <span class="card__icon">
                <img src="~/assets/icons/design.svg" height="60px" alt="Design-Icon">
              </span>
              <h3 class="card__title">Design</h3>
              <p class="card__description">I love to design layouts for the web.</p>
            </div>
            <div class="card">
              <span class="card__icon">
                <img src="~/assets/icons/idea.svg" height="60px" alt="Idea">
              </span>
              <h3 class="card__title">Web Development</h3>
              <p class="card__description">Getting these designs into a working interface, excites me.</p>
            </div>
            <div class="card">
              <span class="card__icon">
                <img src="~/assets/icons/wordpress-skill.svg" height="60px" alt="Wordpress">
              </span>
              <h3 class="card__title">Wordpress</h3>
              <p class="card__description">Wordpress powers up the 30% of the web. <br> I also love it.</p>
            </div>
            <div class="card">
              <span class="card__icon">
                <img src="~/assets/icons/search.svg" height="60px" alt="Search Icon">
              </span>
              <h3 class="card__title">Digital Marketing</h3>
              <p class="card__description">Reach new customers using smart, digital strategies.</p>
            </div>
         </div>
      </div>
    </div>
</template>

<script>
// export default {
//   asyncData(context) {
//     return context.app.$storyapi.get('cdn/stories/about' , {
//       version: 'draft'
//     }).then(res => {
//       return {
//         title: res.data.story.content.title,
//         content: res.data.story.content.content
//       }
//     })
//   }
// }
</script>


<style lang="scss" scoped>
  $page_color: #625B7E;

  .icon {
  display: inline-block;
  width: 2em;
  height: 2em;
  stroke-width: 0;
  stroke: $page_color;
  fill: $page_color;
}

  .main-content {
    display: grid;
    grid-template-columns: 50% 50%;

    @media screen and (max-width: 48rem) {
        grid-template-columns: 100%;
        grid-template-rows: auto auto auto;
      }

  }

  .left-content {
    display: grid;
    justify-items: center;
    grid-template-rows: auto auto auto;
    grid-template-areas:
    "avatar"
    "bio"
    "cta"
  }

  .avatar {
    grid-area: avatar;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    &__img {
    margin-top: 5px;
    flex: 1;
    width: 80px;
    border-radius: 3px;
    // clip-path: polygon(0% 0%, 100% 3%, 98% 99%, 3 93%);
    clip-path: polygon(4% 1%,99% 0,93% 97%,1% 100%);
  }

    &__social {
      text-align: center;
      display: flex;
      justify-content: space-around;
      a {
        margin-right: 10px;
      }
    }
  }

  .bio {
    grid-area: bio;
    display: flex;
    flex-direction: column;
    align-items: center;
    

    &__intro {
    margin-bottom: 0;
    text-align: center;
    font-size: 1.4rem;
    }
    &__main {
    line-height: 1.8;
    text-align: left;
    font-size: 1.1rem;
    text-align: justify;
    padding: 0 30px 0 30px;
    

    @media only screen and (max-height: 900px) {
      font-size: 14px;
    }
    }

  }

  .cta {
    grid-area: cta;
    display: flex;

    a {
      margin-right: 10px
    }
  }

  // Right Content

  .right-content {
    display: grid;
    grid-template-rows: 2fr 8fr;
    
  }

  .skills {
    display: flex;
    justify-content: center;
    align-self:end;
    &__title {
      text-align: center;
    }
  }

  .skills-card {
    display: grid;
    align-content: center;
    padding-left: 20px;
    padding-right: 20px;
    grid-gap: 20px;
    grid-template-columns: repeat(2,1fr);

    @media screen and (max-width: 48rem) {
      display: block;
      padding: 0;
    }

    @media screen and (max-width: 48rem) {
      display: block;
      padding: 0;
    }


    
  }

  .card {
    background: white;
    border: 1px solid white;
    text-align: center;
    padding-top: 10px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
    &__title {

    }

    &__description {
      font-size: 0.8rem;
    }
  }






</style>