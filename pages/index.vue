<template>
  <div class="wrapper-box">
    <div class="main-content">
      <div class="title">
        <p class="title__intro">Hey, there</p>
        <h1 class="title__heading">I'm Bill Bakas, <br> a designer &amp; developer</h1>
        <p class="title__text">I love to design and code user interfaces, <br> iterate and create user-friendly products.</p>
      </div>
      <nuxt-link class="btn btn--white" to="about/">More about me</nuxt-link>
      <!-- <div class="description">
        <p class="description__content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, accusantium!</p>
        <p class="description__technologies">HTML,CSS,JS</p>
        <nuxt-link to="/portfolio/two"><img src="~/assets/images/arrow-down.svg" class="arrow arrow-down"></nuxt-link>
      </div> -->
      <div class="details img2">
        <img src="~/assets/images/home.jpg" alt="">
      </div>
  </div>
  </div>
</template>

<style lang="scss" src="../assets/global.scss">
</style>

<style lang="scss" scoped>
  $page_color: #625B7E;

  .main-content {
  grid-area: iface;
  background: #FAFAFA;
  box-shadow: 15px 15px 20px lightgray;
  display: grid;
  grid-template-areas:
  "title  details"
  "title details"
  "cta details"
}

.title {
  grid-area: title;
  padding: 20px;
  align-self: center;
  justify-self: center;

  &__intro {
    font-size: 1.5rem;
    color: black;
  }

  &__heading {
      font-size: 2.5rem;
  }

  &__text {
    font-size: 1.5rem;
    line-height: 1.3;
  }
}

h1 {
  color: $page_color !important;
}

.img2 {
  background: $page_color;

  img {
    width: 100%;
  }
}

.btn {
  grid-area: cta;
}
</style>





<script>

</script>
