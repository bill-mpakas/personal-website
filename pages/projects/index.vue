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
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  $page_color: red;

  .projects__title {
    grid-area: title;
    text-align: center;
  }

  .projects__cards {
    padding: 20px;
    grid-area: projects;
    display: grid;
    grid-gap: 30px;
    grid-template-rows: repeat(auto-fill, minmax(200px, 1fr));
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .card {
  background: white;
  border: 1px solid white;
  text-align: center;
  box-shadow: 0 0 4px  rgba(0,0,0,0.1);
}

.card .icon {
  font-size: 10px;
}
.card p {
  color: rgba(0,0,0,0.5);
}
  
</style>





<script>
  export default {
  layout: 'projects',
}
</script>
