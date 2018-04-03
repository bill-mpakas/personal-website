<template>
    <div class="main-content">
     <div class="left-content">
          <div class="avatar">
            <img src="~/assets/images/profile_pic.png" alt="" class="avatar__img">
            <div class="avatar__social">
              <img src="~/assets/icons/twitter.svg" height="30px" width="30px" alt="">
              <img src="~/assets/icons/facebook.svg" height="30px" width="30px" alt="">
              </div>
          </div>
          <div class="bio">
          <h3 class="bio__intro">About me</h3>
          <p class="bio__main">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          </div>
          <div class="cta">
            <a class="btn btn--blue" href="">Download CV</a>
            <nuxt-link class="btn btn--blue" to="projects">View Projects</nuxt-link>
          </div>
      </div>
      <div class="right-content">
        <div class="skills">
          <h2 class="skills__title">What I do</h2>
        </div> 
         <div class="skills-card">
           <div class="card">
              <span class="card__icon">
                <img src="~/assets/icons/design.svg" height="50px" alt="">
              </span>
              <h3 class="card__title">Design</h3>
              <p class="card__description">I love to design layouts for the web.</p>
            </div>
            <div class="card">
              <span class="card__icon">
                <img src="~/assets/icons/idea.svg" height="50px" alt="">
              </span>
              <h3 class="card__title">Web Development</h3>
              <p class="card__description">Getting these designs into a working interface, excites me.</p>
            </div>
            <div class="card">
              <span class="card__icon">
                <img src="~/assets/icons/wordpress-skill.svg" height="50px" alt="">
              </span>
              <h3 class="card__title">Wordpress</h3>
              <p class="card__description">Wordpress powers up the 30% of the web. <br> I also love it.</p>
            </div>
            <div class="card">
              <span class="card__icon">
                <img src="~/assets/icons/search.svg" height="50px" alt="">
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
    display: grid;
    grid-gap: 1rem;
    grid-auto-columns: 100%;
    grid-template-rows: auto min-content;
    align-items: center;      /* new */
    
    &__img {
    width: 150px;
    border-radius: 3px;
    // clip-path: polygon(0% 0%, 100% 3%, 98% 99%, 3 93%);
    clip-path: polygon(4% 1%,99% 0,93% 97%,1% 100%);
  }

    &__social {
      text-align: center;
      align-self: start;

      svg {
        padding-right: 10px;
      }
    }
  }

  .bio {
    grid-area: bio;
    display: grid;
    grid-template-rows: min-content min-content;
    justify-items: center;

    &__intro {
    text-align: center;
    font-size: 1.4rem;
    }
    &__main {
    line-height: 1.8;
    text-align: left;
    font-size: 0.9rem;
    padding: 0 30px 0 30px;
    max-width: 75%;
    }

  }

  .cta {
    grid-area: cta;
    justify-self: center;
    align-self: center;

    a {
      margin-right: 10px
    }
  }

  // Right Content

  .right-content {
    display: grid;
    grid-template-rows: 20% 65%;
    
  }

  .skills {
    justify-self: center;
    align-self: end;
    &__title {
      
    }
  }

  .skills-card {
    display: grid;
    align-self: center;
    padding-left: 20px;
    padding-right: 20px;
    grid-gap: 25px;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;

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