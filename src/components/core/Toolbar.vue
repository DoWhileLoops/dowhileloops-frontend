<template>
  <v-toolbar
    id="core-toolbar"
    app
    flat
    prominent
    style="background: #eee;"
  >
    <div class="v-toolbar-title">
      <v-toolbar-title
        class="tertiary--text font-weight-light"
      >
        <v-btn
          v-if="responsive"
          class="default v-btn--simple"
          dark
          icon
          @click.stop="onClickBtn"
        >
          <v-icon>mdi-view-list</v-icon>
        </v-btn>
        
        <span v-if="headingContent === 'SingleBlog'" >
          <a href="/blog" class="backButton tertiary--text">
          <v-icon>mdi-arrow-left</v-icon>
            Back To All Blogs
          </a>
        </span>

        {{ headingContent !== 'SingleBlog' ? headingContent : '' }}

      </v-toolbar-title>
    </div>

    <v-spacer />
  </v-toolbar>
</template>

<style>
  .backButton{
    color:
  }
</style>

<script>

import {
  mapMutations
} from 'vuex'

export default {
  data: () => ({
    notifications: [
      'Mike, John responded to your email',
      'You have 5 new tasks',
      'You\'re now a friend with Andrew',
      'Another Notification',
      'Another One'
    ],
    title: null,
    responsive: false
  }),
  computed: 
  { 
    headingContent: function () {
      if (this.title === 'Home') {
        if (!this.responsive) {
          return 'Accumulated Content From A Life Nerded Out.'
        } else {
          return 'doWhileLoops'
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
    }
  }
}
</script>

<style>
  #core-toolbar a {
    text-decoration: none;
  }
</style>
