<template>
  <v-footer
    id="core-footer"
    :height= "75"
    :class="[tinyresponsive ? 'footerTinyResponsive' : responsive ? 'footerResponsive' : 'footernonResponsive']"
  >
    <v-layout>
    
  </v-layout>
    <div v-if="tinyresponsive" class="footer-items-tinyresponsive">
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
              <img src="../../assets/About.svg" class="infoIconTinyResponsive" @click.stop="dialog = true">
              <v-dialog
                v-model="dialog"
                width="500">
                <v-card>
                  <v-card-text class="aboutText">
                    <p>DoWhileLoops is the creative outlet for one Christopher Clemons, a longtime musical man about town. Gone are the sweaty days of playing in the bars, traded evermore for a long steady drip of dependable income. But still the spark of creative sauce lies buried deep in the embers, a dormant seed <strong>which must </strong>find purchase if El Dorado e're be reached. </p>
                    <br/>
                    <p>This is the purpose of DoWhileLoops.</p>
                    <br/>
                    <h4><a href="mailto:dowhile@dowhileloops.com" class="mailToLink">dowhile@dowhileloops.com</a></h4>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      text
                      class="aboutButton"
                      @click="dialog = false"
                    >
                      SWEET
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </template>
            <template v-if="link.name == 'ITunes'">
              <img src="../../assets/iTunes_Store_icon_wht.svg" class="iTunesIconTinyResponsive">
            </template>
            <template v-else>
                  <v-icon :size="link.name=='Spotify' ? 26 : 29" color="#fff">
                {{ link.Icon }}
              </v-icon>
            </template>
          </a>
      </span>
    </div>
    <div v-else class="footer-items">
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
                  <v-card-text class="aboutText">
                    <p>DoWhileLoops is the creative outlet for one Christopher Clemons, a longtime musical man about town. Gone are the sweaty days of playing in the bars, traded evermore for a long steady drip of dependable income. But still the spark of creative sauce lies buried deep in the embers, a dormant seed <strong>which must </strong>find purchase if El Dorado e're be reached. </p>
                    <br/>
                    <p>This is the purpose of DoWhileLoops.</p>
                    <br/>
                    <h4><a href="mailto:dowhile@dowhileloops.com" class="mailToLink">dowhile@dowhileloops.com</a></h4>
                  </v-card-text>

                  <v-card-actions>
                    <v-btn
                      text
                      class="aboutButton"
                      @click="dialog = false"
                    >
                      SWEET
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
    tinyresponsive: false,
    dialog: false,
    links: [
      { name: 'Spotify', Link: 'https://open.spotify.com/artist/4dfVsaqVgf5u6q660xAGoj?si=L5bSjH7lQHiH46bBtywLEA', Icon: 'mdi-spotify' },
      { name: 'YouTube', Link: 'https://music.youtube.com/channel/UC3NSF1Ldq-CdU-7N1bAGFAA', Icon: 'mdi-youtube' },
      { name: 'ITunes', Link: 'https://music.apple.com/us/artist/dowhileloops/1521112901?itsct=music_box&itscg=30200&ct=artists_do_while_loops&ls=1&app=music', ImgSrc: "../../assets/iTunes_Store_icon_wht.svg"},
      { name: 'Info', ImgSrc: "../../assets/About.svg"}
    ]
  }),
  mounted () {
    this.onResponsiveInverted();
    window.addEventListener('resize', this.onResponsiveInverted);
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResponsiveInverted);
  },
  methods: {
    onResponsiveInverted () {
      if (window.innerWidth < 991) {
      this.responsive = true
      if(window.innerWidth < 551){
          this.tinyresponsive = true;
      }
      else
        this.tinyresponsive = false;
      } else {
        this.responsive = false
        this.tinyresponsive = false;
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
.aboutText{
  text-indent: 25px;
  font-family: 'Inconsolata';
  font-size: 18px;
  color:white;
}
.mailToLink{
  color: #baad55 !important;
}
.aboutButton{
  width: 100%;
  font-size: 24px !important;
  font-family: 'Inconsolata';
  border-radius: 25px !important; 
  background: rgba(0, 0, 0, 0) !important; 
  border-color: #0041C2 !important;
  border-style: solid;
}
.footerTinyResponsive{
 padding-top: 45px !important;
}
.footerResponsive{
  padding-top: 45px !important;
}
.footernonResponsive{
  padding-top: 0 !important;
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
.iTunesIconTinyResponsive{
  height: 22px;
  width: 22px;
}
.infoIconTinyResponsive{
  height: 27px;
  width: 27px;
}
</style>
