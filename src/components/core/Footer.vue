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
        <a
          :href="link.Link"
          class="tertiary--text footer-links">
          <v-icon size="25">
            {{link.Icon}}
          </v-icon>
          </a>
      </span>
    </div>
    <v-spacer/>
    <span class="font-weight-light copyright">
      &copy;
      {{ (new Date()).getFullYear() }}
      <a
        href="/#"
        target="_blank">DoWhileLoops</a>
    </span>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: [
      { name: 'Home', Link: '/#', Icon: 'mdi-home' },
      { name: 'LinkedIn', Link: 'https://www.linkedin.com/in/christopher-clemons-53839b107', Icon: 'mdi-linkedin-box' },
      { name: 'GitHub', Link: 'https://github.com/clemCode', Icon: 'mdi-github-circle' },
      { name: 'Soundcloud', Link: 'https://soundcloud.com/dowhileloops', Icon: 'mdi-soundcloud' }
    ]
  })
}
</script>

<style>
#core-footer {
  z-index: 0;
}
</style>
