<template>
  <div class="wrapper-box">
    <div class="main-content">
      <div class="avatar">
        <img src="http://i.pravatar.cc/170" alt="" class="avatar__img">
        <div class="avatar__social">fb, linkedin</div>
      </div>
      <div class="content">
        <h3 class="content__intro">My Journey</h3>
        <p class="content__main">
          When I was young I had this dream about becoming a pro skateboarder. 
          I was the first to be at the skate park every day and the last to leave. 
          knowledge I apply to the professional work I do now.
        </p>
      </div>
      <a class="btn btn--blue" href="">Download CV</a>
      <div class="details img2">
        <img src="~/assets/images/home.jpg" alt="">
      </div>
    </div>
  </div>
</template>

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

.avatar {
  grid-area: avatar;
  display: grid;            /* new */
  align-items: center;      /* new */
  justify-items: center;   

  &__img {
    align-content: center;
    align-items: center;
    border-radius: 50%;
  }

  &__social {
    text-align: center;
  }
}

.content {
  grid-area: content;

  &__intro {
    text-align: center;
    font-size: 1rem;
  }
  &__main {
    font-size: 1rem;
    padding: 0 30px 0 30px;
  }
}
.details {
  background: $page_color;

  img {
    width: 100%;
  }
}

.btn {
  grid-area: cv;
}
</style>





<script>

</script>
