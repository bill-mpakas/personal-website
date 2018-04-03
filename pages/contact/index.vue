<template>
    <div class="main-content">
      <h2 class="contact-title">
      Don't Be a Stranger
      </h2>
      <div class="contact-form">
        <form name="contact" action="" method="post" netlify>
          <label class="form-label" for="name">
            Name:
          </label>
          <input type="hidden" name="form-name" value="contact" />
          <input class="form-field" name="name" id="name" />
          <label class="form-label" for="email">
            Email:
          </label>
          <input class="form-field" name="email" id="email" />
          <label class="form-label" for="message">
            Message:
          </label>
          <textarea class="form-field" name="message" id="message"></textarea>
          <input class="form-button" type="submit" value="Send message" />
        </form>
      </div>
    </div>
</template>

<style lang="scss" scoped>
  $page_color: #625B7E;

  .main-content {
    display: grid;
    grid-template-rows: 10% 90%;
    @media screen and (max-width: 800px) {
       display: block;
      }
  }

  .contact-title {
    align-self: center;
    justify-self: center;
  }



  
</style>





<script>

</script>