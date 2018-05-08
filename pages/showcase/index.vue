<template>
  <div class="img">
    <h1 class="heading">
      ManHattan
    </h1>
    <h2 class="content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nobis?
    </h2>
  </div>
</template>

<style lang="scss" scoped>
  
  

  .img {
    display: grid;
    grid-template-rows: 1fr 1fr;
    background-image: url('~assets/images/showcase/ny.jpg');
    width: 100%;
    background-repeat: no-repeat;
    background-size: contain;
    height: 100%;
  }

  .heading {
    text-align: center;
    color: red;
  }

  .content {
    
  }


  
</style>





<script>
  export default {
  layout: 'showcase',
  
}
</script>
