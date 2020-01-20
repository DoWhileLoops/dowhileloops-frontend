<template>
  <v-toolbar
    id="core-toolbar"
    app
    flat
    prominent
  >
  <div v-if="responsive" class="nav-outerdiv">
    <v-layout row align-center class="justify-space-between">
        <v-flex xs9 layout class="responsiveNavText justify-start">
          <v-toolbar-title>
            <v-btn
              class="default v-btn--simple"
              dark
              icon
              @click.stop="onClickBtn"
            >
            <v-icon color="#2c84f6">mdi-menu</v-icon>
            </v-btn> 
            <!-- back to blogs right here -->
            <span v-if="headingContent == 'SingleBlog'" class="responsiveNavText" v-on:click="backToPageManually('Blog')">
              <v-icon color="#2c84f6">mdi-skip-backward</v-icon>
              Back To All Blogs
            </span>

            <span v-else class="responsiveNavText">
              {{ headingContent }}
              </span>
          </v-toolbar-title>
        </v-flex>        
        <v-flex xs3 layout align-center class="responsiveNavBrand justify-end" mr-2>
            <svg id="Component_13_1" data-name="Component 13 – 1" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 237.873 322.172">
              <path id="Path_36" data-name="Path 36" d="M27.068,251.034h0L5.414,246.111,0,236.267l10.827-4.922V54.145L48.919,34.093,30.065,72.206,59.4,91.754l-32.33,16.535V251.034ZM72.989,84.8h0L45.6,66.547l-.048-.032.026-.052L66.046,25.077l21.1-11.109L64.192,60.375,88.75,76.741ZM102.342,69.79,79.723,54.717l-.049-.032.026-.052,24.576-49.68L113.684,0V63.989Z" transform="translate(111.891)" fill="#2c84f6"/>
              <path id="Path_35" data-name="Path 35" d="M67.4.1c37.809,1.3,68.938,15.511,69.528,31.744S107.346,60.178,69.536,58.879.6,43.367.009,27.135,29.59-1.2,67.4.1Z" transform="matrix(0.914, -0.407, 0.407, 0.914, 0, 268.297)" fill="#2c84f6"/>
            </svg>
        </v-flex>        
      </v-layout>
  </div>

    <div v-else class="nav-outerdiv">
      <v-layout row align-center justify-center>
        <v-flex 
          xs6 md3 lg3 
          v-for="(link, i) in links" 
          :key="link.text" class="nav-btn"
          v-on:click="onNavBtnClick(link)">
        <h4>
            {{ link.text }}
        </h4>  
        </v-flex>        
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
    links: [
      {
        to: '/',
        icon: 'mdi-home',
        text: 'Home'
      },
      {
        to: '/tech',
        icon: 'mdi-code-brackets',
        text: 'Tech'
      },
      {
        to: '/tunes',
        icon: 'mdi-music',
        text: 'Tunes'
      },
      {
        to: '/blog',
        icon: 'mdi-lead-pencil',
        text: 'Blog'
      },
      {
        to: '/about',
        icon: 'mdi-account',
        text: 'About'
      }
    ]
  }),
  computed: { 
    headingContent: function () {
      if (this.title === 'Home') {
        return 'DoWhileLoops'
      }
      else {
        return this.title
      } 
    }
  },
  watch: {
    '$route' (val) {
      this.title = val.name
    }
  },

  mounted () {
    this.onResponsiveInverted()
    window.addEventListener('resize', this.onResponsiveInverted)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResponsiveInverted)
  },

  methods: {
    ...mapMutations('app', ['setDrawer', 'toggleDrawer']),
    onClickBtn () {
      this.setDrawer(!this.$store.state.app.drawer)
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
