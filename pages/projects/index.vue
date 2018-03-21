<template>
    <div class="main-content">
      <div class="card">
        <div class="card__img">
          <img src="~/assets/images/thumbnails/travel-site.png" alt="">
        </div>
        <span class="card__title">Travel Site</span>
        <span class="card__tech">View Project</span>
      </div>
       <div class="card">
        <div class="card__img">
          hello
        </div>
        <div class="card__title">
          bill
        </div>
        <div class="card__button">
          button
        </div>
      </div>
       <div class="card">
        <div class="card__img">
          hello
        </div>
        <div class="card__title">
          bill
        </div>
        <div class="card__button">
          button
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
  $page_color: #2B9CF2;

  .main-content {
    display: grid;
    grid-gap: 30px;
    padding: 30px;
    justify-items: center;
    grid-template-rows: repeat(auto-fill, minmax(min-content, 200px));
    grid-template-columns: repeat(auto-fill, minmax(min-content, 220px));

    @media screen and (max-width: 700px) {
        display: block;
      }

  }

  .card {
    background: white;
    border: 1px solid red;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
    display: grid;
    grid-template-columns: 100%;
    justify-items: center;

    &__img {
      border: 1px solid blue;
    }

    &__title {
    }

    &__tech {
      
    }
  }





  

</style>



<script>
  export default {
  layout: 'projects'
  }
</script>
