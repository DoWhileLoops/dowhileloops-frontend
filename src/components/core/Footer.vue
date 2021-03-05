<template>
  <v-footer
    id="core-footer"
    absolute
    height="55"
  >
  
  <v-layout>
    
  </v-layout>
    <div class="footer-items">
      <span
        v-for="link in links"
        :key="link.name"
        class="footerItem"
      >
          <a
          :href="link.name != 'Info' ? link.Link : null"
          target="_blank"
          class="tertiary--text footer-links mr-3"
          >
            <template v-if="link.name == 'Info'">
              <img src="../../assets/About.svg" class="infoIcon" @click.stop="dialog = true">
              <v-dialog
                v-model="dialog"
                width="500">
                <v-card>
                  <v-card-title class="headline grey lighten-2">
                    Privacy Policy
                  </v-card-title>
                  <v-card-text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </v-card-text>
                  <v-divider></v-divider>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="primary"
                      text
                      @click="dialog = false"
                    >
                      I accept
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </template>
            <template v-if="link.name == 'ITunes'">
              <img src="../../assets/iTunes_Store_icon_wht.svg" class="iTunesIcon">
            </template>            
            <template v-else>
                <v-icon :size="link.name=='Spotify' ? 32 : 35" color="#fff">
                {{ link.Icon }}
              </v-icon>
            </template>          
          </a>
      </span>
    </div>
    
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    responsive: false,
    dialog: false,
    links: [
      { name: 'Spotify', Link: 'https://open.spotify.com/artist/4dfVsaqVgf5u6q660xAGoj?si=L5bSjH7lQHiH46bBtywLEA', Icon: 'mdi-spotify' },
      { name: 'YouTube', Link: 'https://music.youtube.com/channel/UC3NSF1Ldq-CdU-7N1bAGFAA', Icon: 'mdi-youtube' },
      { name: 'ITunes', Link: 'https://music.apple.com/us/artist/dowhileloops/1521112901?itsct=music_box&itscg=30200&ct=artists_do_while_loops&ls=1&app=music', ImgSrc: "../../assets/iTunes_Store_icon_wht.svg"},
      { name: 'Info', ImgSrc: "../../assets/About.svg"}
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
.footerItem{
  text-align: center;
  margin-left:5px !important;
}
.iTunesIcon{
  height: 27px;
  width: 27px;
}
.infoIcon{
  height: 32px;
  width: 32px;
}
</style>
