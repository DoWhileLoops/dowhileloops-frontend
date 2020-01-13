<template>
  <v-toolbar
    id="core-toolbar"
    app
    flat
    prominent
    style="background: #300707;"
  >
    <div v-if="responsive" class="v-toolbar-title">
      <v-toolbar-title
        class="tertiary--text navTitle"
      >
        <v-btn
          class="default v-btn--simple"
          dark
          icon
          @click.stop="onClickBtn"
        >
          <v-icon>mdi-view-list</v-icon>
        </v-btn> 
        
        <!-- <span v-if="headingContent === 'SingleBlog'" >
          <a href="/blog" class="backButton tertiary--text">
          <v-icon color="darkIcon">mdi-arrow-left</v-icon>
            Back To All Blogs
          </a>
        </span>-->

      <span class="">DoWhileLoops</span>
        
      </v-toolbar-title>
    </div>
    <div v-else class="navOuterDiv">
      <v-layout row align-center justify-center>
        <v-flex 
          xs6 md3 lg3 
          v-for="(link, i) in links" 
          :key="link.text" class="navBtn"
          v-on:click="onNavBtnClick(link)">
        <span>
            {{ link.text }}
        </span>  
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
  computed: 
  { 
    headingContent: function () {
      if (this.title === 'Home') {
        if (!this.responsive) {
          return 'Accumulated Content From A Life Nerded Out.'
        } else {
          return 'DoWhileLoops'
        }
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
    onClick () {
      //
    },
    onResponsiveInverted () {
      if (window.innerWidth < 991) {
        this.responsive = true
      } else {
        this.responsive = false
      }
    },
    onNavBtnClick(link) {
      this.$router.push({ name: link.text })      
    }
  }
}
</script>

<style>
  #core-toolbar a {
    text-decoration: none;
  }
  .toolbarTitle{
    color:white;
  }
  .navOuterDiv{
    width:100%;
    text-align:center
  }
  .navBtn{
    cursor: pointer;
    color:white
  }
  .navBtn:hover{
    box-shadow: 0 14px 28px rgba(16, 179, 143, 0.671), 0 10px 10px rgba(231, 5, 5, 0.904) !important;
  }
</style>