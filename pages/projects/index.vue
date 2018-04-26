<template>
    <div class="main-content">
      <div class="left-content">
        <div class="heading">
          <h3>Curious Learning</h3>
        </div>
        <div class="projects">
          <ul class="projects-list">
            <li class="projects-list__item"><nuxt-link  to="projects/travel-site">Travel Site</nuxt-link></li>
            <li class="projects-list__item"><nuxt-link  to="projects/coffeeshop">CoffeeShop</nuxt-link></li>
            <li class="projects-list__item"><nuxt-link  to="projects/deli-project">Deli-Project</nuxt-link></li>
            <li class="projects-list__item"></li>
            <li class="projects-list__item"></li>
          </ul>
        </div>
      </div>
      <hr class="hr">
      <div class="right-content">
        <div class="heading">
          <h3>Work</h3>
        </div>
        <div class="projects">
          <ul class="projects-list">
            <li class="projects-list__item"><nuxt-link  to="projects/elke-uom">Elke Uom</nuxt-link></li>
            <li class="projects-list__item"><nuxt-link  to="projects/pelleescarpa">Pellee Scarpa</nuxt-link></li>
            <li class="projects-list__item"><nuxt-link  to="projects/kodiko">Kodiko.gr</nuxt-link></li>
            <li class="projects-list__item"><nuxt-link  to="projects/invited">Invited</nuxt-link></li>
            <li class="projects-list__item"></li>
            <li class="projects-list__item"></li>
          </ul>
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
  $page_color: #2B9CF2;

  .hr {
          display: none;
        }

  .main-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));

    @media screen and (max-width: 700px) {
        display: block;

        .hr {
          visibility: visible;
        }
      }

  }

  .left-content {
    display: grid;
    grid-template-rows: 30% 70%;
    background-color: #ffffff;
  }
  .right-content {
    display: grid;
    grid-template-rows: 30% 70%;
    background-color: #ffffff;
  }

  .heading {
    text-align: center;
    justify-self: center;
    font-size: 1.9em;
    align-self: center;
  }

  .projects {
      justify-self: center;
      align-self: start;
  }

  .projects-list {
    list-style: none;
    padding: 20px 0;
    
    &__item {
      padding: 10px 0;
      text-decoration: none;
      font-size: 1.8em;

      a {
        text-decoration: none;
        color: rgba(0,0,0,0.7);
      }
    }
  }





  

</style>



<script>
  export default {
  layout: 'projects'
  }
</script>
