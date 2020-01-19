<template>
  <v-footer
    id="core-footer"
    absolute
    height="82"
  >
    <div class="footer-items">
      <span
        v-for="link in links"
        :key="link.name"
      >
          <a v-if="link.name === 'Home'"
          :href="link.Link"
          v-bind:class="{'mr-4': !responsive, 'mr-2': responsive}"
          class="tertiary--text footer-links">
          <v-icon size="35">
            {{ link.Icon }}
          </v-icon>
        </a>
          <a
          :href="link.Link"
          v-else
          target="_blank"
          v-bind:class="{'mr-4': !responsive, 'mr-2': responsive}"
          class="tertiary--text footer-links"
          >
          <v-icon size="35">
            {{ link.Icon }}
          </v-icon>
          </a>
      </span>
    </div>
    <v-spacer/>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    responsive: false,
    links: [
      { name: 'Home', Link: '/#', Icon: 'mdi-home' },
      { name: 'LinkedIn', Link: 'https://www.linkedin.com/in/christopher-clemons-53839b107', Icon: 'mdi-linkedin-box' },
      { name: 'GitHub', Link: 'https://github.com/clemCode', Icon: 'mdi-github-circle' },
      { name: 'Soundcloud', Link: 'https://soundcloud.com/dowhileloops', Icon: 'mdi-soundcloud' }
    ]
  }),
  mounted () {
    this.onResponsiveInverted()
    window.addEventListener('resize', this.onResponsiveInverted)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResponsiveInverted)
  },

  methods: {
    onResponsiveInverted () {
      if (window.innerWidth < 991) {
        this.responsive = true
      } else {
        this.responsive = false
      }
    },
    onNavBtnClick (link) {
      this.$router.push({ name: link.text })      
    }
  }
}
</script>

<style>
#core-footer {
  z-index: 0;
}
</style>
