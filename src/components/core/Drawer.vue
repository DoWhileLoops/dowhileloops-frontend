<template>
  <v-navigation-drawer
    id="app-drawer"
    v-model="inputValue"
    app
    dark
    floating
    persistent
    mobile-break-point="99100"
    width="260"
  >
  <!--mobile-break-point is hack - TODO - figure out-->
      <v-layout
        class="fill-height"
        tag="v-list"
        column
      >
        <v-list-tile avatar>
          <v-list-tile-avatar mt-4
          >
            <v-img contain :src="logo" height="90px" width="90px"/>
          </v-list-tile-avatar>

          <v-list-tile-title class="title">
            DoWhileLoops
          </v-list-tile-title>

        </v-list-tile>
        <v-divider/>
        <v-list-tile
          v-for="(link, i) in links"
          :key="i"
          :to="link.to"
          :active-class="color"
          avatar
          class="v-list-item"
        >
          <v-list-tile-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title
            v-text="link.text"
          />
        </v-list-tile>
      </v-layout>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import {
  mapMutations,
  mapState
} from 'vuex'

export default {
  props: {
    opened: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    logo: require('../../assets/DoWhileLogo.svg'),
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
    ...mapState('app', ['image', 'color']),
    inputValue: {
      get () {
        return this.$store.state.app.drawer
      },
      set (val) {
        this.setDrawer(val)
      }
    },
    items () {
      return this.$t('Layout.View.items')
    }
  },
  methods: {
    ...mapMutations('app', ['setDrawer', 'toggleDrawer'])
  }  
}
</script>

<style lang="scss">
  #app-drawer {
    .v-list__tile {
      border-radius: 4px;

      &--buy {
        margin-top: auto;
        margin-bottom: 17px;
      }
    }
  }
</style>
