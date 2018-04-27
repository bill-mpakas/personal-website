<template>
  <div id="app">
      <navbar></navbar>
      <div class="box">
        <transition name="fade">
          <nuxt /> 
        </transition> 
      </div>
      <!-- <div class="footer">
        <p class="footer__content">Made with ❤️ in Thessaloniki</p>
      </div> -->
  </div>
</template>


<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export default {
  components: {
    Navbar,Footer
  },
}
</script>

<style lang="scss" src="../assets/global.scss">
</style>

<style lang="scss">
// override if i want the main container
  
  .box {
    grid-area:main;
    display: grid;
    width: 85vw;
    align-self: center;
    justify-self:center;
    height: 85vh;
    grid-template-columns: 100%;
    // border: 0.5px solid lightgrey;
    box-shadow: 3px 3px 3px 5px rgba(0, 0, 0, 0.05);

    @media screen and (max-width: 48rem) {
      grid-template-columns: 100%;
      box-shadow: none;
      width: 100%;
      height: 100%;
    }

     @media screen and (max-height: 1140px) {
      width: 90vw;
      height: 90vh;
    }


    
  }

  .main-content {

    @media screen and (max-width: 48rem) {
      display: flex;
      flex-direction: column;
    }

    display: grid;
    grid-template-rows: 100%;
    grid-template-columns: 50% 50%;
  }
  .left-content {
    display: grid;
    grid-template-rows: 1fr 3fr 1fr;

    @media screen and (max-width: 71.250em) {
      display: grid;
      grid-template-rows: min-content auto min-content;
      grid-template-columns: auto;
    }
  }
  .right-content {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 6fr 1fr;

    @media screen and (max-width: 71.250em) {
      display: grid;
      grid-template-columns: auto;
    }
  }

  .project-description {
  display: grid;
  align-items: center;
  grid-template-rows: 2fr 1fr ;

  @media screen and (max-width: 71.250em) {
      display: grid;
      grid-template-rows: min-content min-content min-content;
      grid-template-columns: auto;
    }

  &__content {
    
    padding: 0 20px 0 20px;
    font-size: 1.08rem;
    line-height: 1.5;

    @media screen and (max-height: 900px) {
      padding: 0 10px 0 10px;
      font-size: 0.95rem;
      line-height: 1.4;
    }

  }

  &__tech {
    text-align: center;
    
    
  }
}

.year {
  justify-self: center;

  @media screen and (max-width: 375px) {
    a {
      margin-bottom: 40px;
    }
  }
}



.project-cta {
  display: block;
  justify-content: center;
  padding: 25px;
  text-align: center;
}

.project-title {
  text-align: center;

  &__type {
    font-style: italic;
  }
}

  .logos {
  display: grid;
  grid-gap: 2.5rem;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(min-content, 30px));

  @media screen and (min-width: 85.375em) {
      font-size: 1.2rem;
      grid-template-columns: repeat(auto-fit, minmax(min-content, 35px));
    }
}

.laptop {
  display: flex;
  @media screen and (max-width: 480px) {
      display: flex;
    }
  padding: 10px;
  align-self: center;
  justify-self: center;
  
}

.screen-container.cro-case {
  background-image: url('~assets/images/mockups/travel-site.jpg');
  background-position: center;
  
}
.screen-container.cro-case, .screen-container.email-case, .screen-container.fb-case, .screen-container.ppc-case, .screen-container.seo-case-study, .screen-container.web-design {
  background-position: 50% 0;
  background-size: cover;
  
  }
.screen-container {
  display: flex;
  width: 450px;
  height: 280px;

  min-height: 230px;
  background-color: #fff;
  

  @media screen and (max-width: 480px) {
      width: 250px;
      height: 120px;
    }

  @media screen and (max-width: 71.250em) {
      width: 300px;
      height: 130px;
    }

    @media screen and (max-width: 375px) {
      width: 280px;
    }

    @media screen and (max-width: 340px) {
      width: 220px;
    }
  
}

.laptop-screen {
  display: flex;
  width: auto;
  @media screen and (max-width: 480px) {
      
    }

  padding: 15px;
  border-radius: 11px;
  background-color: #e6e6e6;
  box-shadow: inset 0 1px 0 0 hsla(0,0%,83%,.5);
  -webkit-transform: perspective(1500px);
  transform: perspective(1500px);
  -webkit-transform-origin: 50% 100%;
  -ms-transform-origin: 50% 100%;
  transform-origin: 50% 100%;
}

.laptop-base {
  height: 12px;
    @media screen and (max-width: 480px) {
      display: flex;
    }
  border-top: 3px solid #ebebeb;
  border-bottom-left-radius: 250px;
  border-bottom-right-radius: 250px;
  background-color: #ddd;
  background-image: -webkit-linear-gradient(270deg,#bebebe,#929292 99%);
  background-image: linear-gradient(180deg,#bebebe,#929292 99%);
  box-shadow: 0 8px 5px -4px rgba(0,0,0,.59), 0 11px 22px -2px rgba(0,0,0,.66);
}

  



  


</style>

