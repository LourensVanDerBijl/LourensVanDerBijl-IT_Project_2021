<template>
        <header :class="{'scrolled-nav': scrollPosition}">
        <nav>
        <div class="Branding">
          <img src="../assets/IMG/Logo.png">
          <ul v-show="!mobile" class="navigation">
            <li><router-link class="link"  :to="{name: 'home'}">HOME</router-link></li>
            <li><router-link class="link" :to="{name: 'overview'}"> OVERVIEW</router-link></li>
            <li><router-link class="link" :to="{name: 'pricing'}">PRICING</router-link></li>
            <li><router-link class="link" :to="{name: 'contact'}">CONTACT</router-link></li>
            <li><router-link class="link" :to="{name: 'reviews'}">REVIEWS</router-link></li>
            <li><router-link class="link" :to="{name: 'register'}">Register</router-link></li>
            <li><router-link class="link" :to="{name: 'login'}">Login</router-link></li>
          </ul>
        <div class="icon">
          <i @click="toggleMobileNav" v-show="mobile" class="far fa-bars" :class="{'icon-active' : mobileNav}"></i>
        </div>
        <transition name="moblie-nav">
          <ul v-show="mobileNav" class="downdrop-nav">
            <li><router-link class="link"  :to="{name: 'home'}">HOME</router-link></li>
            <li><router-link class="link" :to="{name: 'overview'}"> OVERVIEW</router-link></li>
            <li><router-link class="link" :to="{name: 'pricing'}">PRICING</router-link></li>
            <li><router-link class="link" :to="{name: 'contact'}">CONTACT</router-link></li>
            <li><router-link class="link" :to="{name: 'reviews'}">REVIEWS</router-link></li>
            <li><router-link class="link" :to="{name: 'register'}">Register</router-link></li>
            <li><router-link class="link" :to="{name: 'login'}">Login</router-link></li>
          </ul>
        </transition>
        </div>
  </nav>
  </header>
</template>

<script>
  export default { 
    name: "navigation",
    data(){
      return{
        scrollPosition: null,
        mobile: null,
        mobileNav: null,
        windowWidth: null,
      };
    },
    //The created lifecycle hook (Like onload function)
    created(){
      window.addEventListener('resize', this.checkScreen);
      this.checkScreen();
    },
    methods: {
      toggleMobileNav() {
        this.mobileNav = !this.mobileNav;
      },
      //Checking the screen Width of the device
      checkScreen(){
        this.windowWidth = window.innerWidth;
        if (this.windowWidth <= 880){
          this.mobile = true;
          return;
        }
        this.mobile = false;
        this.mobileNav = false;
        return;
      },
    },
   };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
header {
    background-color: rgb(0, 0, 0);
    z-index: 99;
    width: 100%;
    position: fixed;
    transition: .5s ease all;
    color: white;
}

nav {
  position: relative;
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    transition: .5s ease all;
    width: 90%;
    margin:  0 auto;
    @media(min-width: 1140px) {
        max-width: 1140px;
    }
    ul,
    .link {
      font-weight: 500;
      color: white;
      list-style: none;
      text-decoration: none;
    }
    li {
      text-transform: uppercase;
      padding: 16px;
      margin-left: 16px;
    }
    .link{
      font-size: 14px;
      transition: .5s ease all;
      padding-bottom: 4px;
      border-bottom: 1px solid transparent;
      &:hover{
        color: rgb(0, 185, 231);
        border-color: rgb(0, 185, 231);
      }
    }
    .Branding {
      display: flex;
      align-items: center;

      img{
        width: 50px;
        transition: .5s ease all
      }

    }
    .navigation{
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: flex-end;
    }

    .icon {
      display: flex;
      position: absolute;
      top: 0;
      align-items: center;
      right: 24px;
      height: 100%;

      i{
        cursor: pointer;
        font-size: 24px;
        transition:  0.8s ease all;
      }
    }

    .icon-active {
      transform: rotate(180deg);
    }
    
    .downdrop-nav{
      display: flex;
      flex-direction: column;
      position: fixed;
      width: 100%;
      max-width: 250px;
      height: 100%;
      background-color: black;
      top: 0;
      left: 0;
      

      li {
        margin-left: 0;
        color: white;

      }
    }
}
</style>
