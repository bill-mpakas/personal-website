<template>
  <div class="wrapper-box">
    <div class="main-content">
      <div class="projects__title">
        <h1>My Projects</h1>
      </div>
      <div class="projects__cards">
        <div class="card">
           <span class="icon">🌮</span>
          <h3>Tacos</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, assumenda.</p>
          <nuxt-link class="btn btn--white" to="projects/travel-site">View Project</nuxt-link>
        </div>
        <div class="card">
          <span class="icon">🍺</span>
          <h3>Beer</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, assumenda.</p>
        </div>
        <div class="card">
          <span class="icon">🍷</span>
          <h3>Wine</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, assumenda.</p>
        </div>
        <div class="card">
          <span class="icon">🎵</span>
          <h3>Music</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, assumenda.</p> 
        </div>
        <div class="card">
           <span class="icon">🌮</span>
          <h3>Tacos</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, assumenda.</p>
        </div>
        <div class="card">
           <span class="icon">🌮</span>
          <h3>Tacos</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, assumenda.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  $page_color: #625B7E;

  .main-content {
    grid-area: iface;
    box-shadow: 15px 15px 20px lightgray;
    display: grid;
    grid-template-rows: 10% 1fr;
    grid-template-areas: 
    "title"
    "projects"
  }

  .projects__title {
    grid-area: title;
    text-align: center;
  }

  .projects__cards {
    grid-area: projects;
    display: grid;
    padding: 20px;
    grid-gap: 20px;
    grid-template-rows: repeat(auto-fill, minmax(200px, 1fr));
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  .card {
    background: white;
    border: 1px solid white;
    text-align: center;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  }

</style>



<script>
  export default {
  
}
</script>
