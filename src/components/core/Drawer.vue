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
          <v-list-tile-avatar
            color="white"
          >
          <!-- <svg xmlns="http://www.w3.org/2000/svg" width="317.55" height="492.945" viewBox="0 0 317.55 492.945"> -->
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 317.55 492.945">
  <path id="Union_1" data-name="Union 1" d="M1889.807,254.055c-10.445-23.461,22.806-61.054,74.269-83.967,33.93-15.107,67.306-20.06,89.1-14.958l.261-.13V-133l152-88v104l-128,72V174.807a26.262,26.262,0,0,1,0,11.623V187h0l-.115-.029c-5.042,22.308-34.464,49.843-75.42,68.078-25.333,11.278-50.356,16.9-70.482,16.9C1910.66,271.945,1895.111,265.967,1889.807,254.055Z" transform="translate(-1887.888 221)" fill="#173f67"/>
</svg>

            <!-- <v-img
              :src="logo"
              height="185"
              contain
            /> -->
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
    logo: '../../assets/logoVector.svg',
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
        // icon: 'mdi-clipboard-text',
        icon: 'mdi-lead-pencil',
        text: 'Blog'
      },
      {
        to: '/about',
        icon: 'mdi-account',
        text: 'About'
      },
      {
        to: '/dashboard',
        icon: 'mdi-view-dashboard',
        text: 'Dashboard'
      },
      {
        to: '/user-profile',
        icon: 'mdi-account',
        text: 'User Profile'
      },
      {
        to: '/table-list',
        icon: 'mdi-clipboard-outline',
        text: 'Table List'
      },
      {
        to: '/typography',
        icon: 'mdi-format-font',
        text: 'Typography'
      },
      {
        to: '/icons',
        icon: 'mdi-chart-bubble',
        text: 'Icons'
      },
      {
        to: '/maps',
        icon: 'mdi-map-marker',
        text: 'Maps'
      },
      {
        to: '/notifications',
        icon: 'mdi-bell',
        text: 'Notifications'
      }
    ]
  }),
  computed: {
    ...mapState('app', ['image', 'color']),
    inputValue: {
      get () {
        // if (this.$store.state.app.drawer === null) {
        //   return false
        // } else {
        //   return this.$store.state.app.drawer
        // }
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
