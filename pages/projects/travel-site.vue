<template>
  <div class="wrapper-box">
    <div class="main-content">
      <div class="project slideUp">
        <h1 class="project__title">Travel Site</h1>
        <p class="project__type">PSD to HTML, CSS, JS</p>
      </div>
      <div class="description">
        <p class="description__content">This was my first web development project back in 2016. I found about an awesome course on Udemy called “Git a developer Job”  by the instructor Brad Schiff. 
          This course introduced me to many industry standard technologies such as npm, GIT, ES6, Sass, PostCSS, Gulp and Node helping me grasp a better understanding of the modern web development workflow. 
          Up until now, i refer to this particular project because it breaks down the workflow of building a website in a nice and structured way.
        </p>
      </div>
      <div class="technologies">
        <span class="technologies__icons">PSD to HTML, HTML, CSS</span>
      </div>
      <div class="details img2">
        <img src="~/assets/images/phone.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
  $page_color: #625B7E;

  .main-content {
  grid-area: iface;
  background: #FAFAFA;
  box-shadow: 15px 15px 20px lightgray;
  display: grid;
  grid-template-areas:
  "avatar  details"
  "content details"
  "cv details"
  }
</style>