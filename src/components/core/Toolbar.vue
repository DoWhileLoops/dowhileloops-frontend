<template>


  <v-toolbar
    id="core-toolbar"
    app
    flat
    prominent
  >

  <div v-if="responsive" class="nav-outerdiv nav-outerdiv-responsive">
      <v-layout row align-center class="justify-space-between">
          <v-flex xs9 layout class="responsiveNavText justify-start">
            <v-toolbar-title>
              <!-- <v-btn
                class="default v-btn--simple"
                dark
                icon
                @click.stop="onClickBtn"
              >
              <v-icon color="#2c84f6" class="responsiveHamburger">mdi-menu</v-icon>
              </v-btn>  -->
            </v-toolbar-title>
          </v-flex>        
        </v-layout>
        

    </div> 

    <div v-else class="nav-outerdiv">
      <v-layout row align-center class="justify-space-between">
          <v-flex xs9 layout class="responsiveNavText justify-start">
            <v-toolbar-title>
              <!-- <v-btn
                class="default v-btn--simple"
                dark
                icon
                @click.stop="onClickBtn"
              >
              <v-icon color="#2c84f6" class="responsiveHamburger">mdi-menu</v-icon>
              </v-btn>  -->
              <!-- <span v-if="headingContent == 'SingleBlog'" class="responsiveNavText" v-on:click="backToPageManually('Blog')">
                <v-icon color="#2c84f6">mdi-skip-backward</v-icon>
                Back To All Blogs
              </span> -->
<!-- 
              <span>{{headingContent}}</span> -->

              

<!-- <span v-else class="responsiveNavText">
                {{ headingContent }}
                </span> -->
<!-- 
              <span class="responsiveNavText">
                STUFF
                </span> -->
            </v-toolbar-title>
          </v-flex>        
          <span v-if="headingContent == 'Tunes' || headingContent == 'About'" class="responsiveNavText">
                DoWhileLoops                
              </span>
          <!-- <v-flex xs3 layout align-center v-on:click="backToPageManually('Home')" class="responsiveNavBrand justify-end" mr-2>
              <svg id="Component_13_1" data-name="Component 13 – 1" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 237.873 322.172">
                <path id="Path_36" data-name="Path 36" d="M27.068,251.034h0L5.414,246.111,0,236.267l10.827-4.922V54.145L48.919,34.093,30.065,72.206,59.4,91.754l-32.33,16.535V251.034ZM72.989,84.8h0L45.6,66.547l-.048-.032.026-.052L66.046,25.077l21.1-11.109L64.192,60.375,88.75,76.741ZM102.342,69.79,79.723,54.717l-.049-.032.026-.052,24.576-49.68L113.684,0V63.989Z" transform="translate(111.891)" fill="#2c84f6"/>
                <path id="Path_35" data-name="Path 35" d="M67.4.1c37.809,1.3,68.938,15.511,69.528,31.744S107.346,60.178,69.536,58.879.6,43.367.009,27.135,29.59-1.2,67.4.1Z" transform="matrix(0.914, -0.407, 0.407, 0.914, 0, 268.297)" fill="#2c84f6"/>
              </svg>
          </v-flex>         -->
        </v-layout>
    </div>

       
    
  </v-toolbar>
</template>

<script>

import {
  mapMutations
} from 'vuex'

export default {
  data: () => ({
    title: null,
    responsive: false,
    currentRoute: null,
    links: [
      {
        to: '/',
        icon: 'mdi-home',
        text: 'Home',
        lowerPath: '/home',
        active: false
      },
      {
        to: '/tunes',
        icon: 'mdi-music',
        text: 'Tunes',
        lowerPath: '/tunes',
        active: false
      },
      {
        to: '/about',
        icon: 'mdi-account',
        text: 'About',
        lowerPath: '/about',
        active: false
      }
      // {
      //   to: '/tech',
      //   icon: 'mdi-code-brackets',
      //   text: 'Tech',
      //   lowerPath: '/tech',
      //   active: false
      // },
      // {
      //   to: '/blog',
      //   icon: 'mdi-lead-pencil',
      //   text: 'Blog',
      //   lowerPath: '/blog',
      //   active: false
      // },
    ]
  }),
  computed: { 
    headingContent: function () {
      if (this.title == 'Home') {
        //console.log(this.title);
        return 'DoWhileLoops';
      }
      else {
        //console.log(this.title);
        return this.title
      } 
    }
  },
  notHomePage: function(){
    return this.$route.name == 'home';
    //console.log(this.$route.name);
    //return this.$route.name;
  },
  currentRouteName: function(){
    this.currentRoute = this.$route.name;
    console.log(this.$route.name);
    //return this.$route.name;
  },
  watch: {
    '$route' (val) {
      this.title = val.name
    }
  },

  mounted () {
    this.onResponsiveInverted()
    window.addEventListener('resize', this.onResponsiveInverted)
    this.setCurrentRouteName()
    
    //console.log(this.$route.name);
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResponsiveInverted)
  },
  methods: {
    ...mapMutations('app', ['setDrawer', 'toggleDrawer']),
    onClickBtn () {
      this.setDrawer(!this.$store.state.app.drawer)
    },
    setCurrentRouteName(){
      this.currentRoute = this.$route.name;
    },
    onResponsiveInverted () {
      if (window.innerWidth < 991) {
        this.responsive = true
      } else {
        this.responsive = false
      }
    },
    onNavBtnClick (link) {
      this.$router.push({ name: link.text })      
    },
    backToPageManually (path) {
      this.$router.push({ name: path })      
    }
  }
}
</script>


<style lang="scss">
   .nav-outerdiv-responsive{
     //background-image: url("../../assets/dwlSplash.png");
     //background-size: 150% 150%;
     
     //height: 500px;
     
   }
  .responsiveHamburger {
    opacity: 100 !important;
  }
  .responsiveNavText{
    font-size: 28px !important;
  }
  
</style>
