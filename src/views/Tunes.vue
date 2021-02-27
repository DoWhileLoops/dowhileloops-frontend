<template>
  <v-container
    fluid
    grid-list-xl
    fill-height>
    <v-layout
      justify-center
      align-center
    >
      <v-flex xs12>
        <material-card
          color="#000">
          <div
            slot="header"
            class="tunesHeader"
          >
            <div class="title font-weight-light mb-2">
                <h3>
                TODO: WRITE.
                </h3>
            </div>
          </div>
          <v-card-text>
            <v-layout
             v-if="responsive"
             row
             wrap>
            <v-flex 
              sm6
              xs12
              md6
              lg6 
              >
                  <!-- <iframe src="https://open.spotify.com/embed/album/2xfpQQlroOCR1zjlFeke07" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> -->
              </v-flex>
            <v-flex sm6
            xs12
            md6
            lg6 
             >
              <!-- <v-img  contain :src="aggregation" height="300px"/> -->
            </v-flex>
            </v-layout>
            <v-layout
             v-else
            row
            wrap
            justify-center
            align-center
            class="iframeRow"
            >
            <v-flex
            xs7
            s7
            md7
            lg6 
             >
              <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=OLAK5uy_lq8oJrlFxRSHU5dGWjY6tX7XWqwifry4A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </v-flex>
              <v-flex 
              xs7
              s7
              md7
              lg6 
              >
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=OLAK5uy_kkXP7q9dcvmcX2SR-AkrrJzDde_wHjeDw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
              </v-flex>
            </v-layout>
          </v-card-text>
        </material-card>
        <!-- TODO: PUT IN v-FLEX and RESIZE THESE -->
        <v-layout
            row
            wrap
            align-center
            justify-center
            >
            <!-- <v-flex xs4> -->
 <a
                :href="'https://open.spotify.com/artist/4dfVsaqVgf5u6q660xAGoj?si=L5bSjH7lQHiH46bBtywLEA'"
                target="_blank"
                class="tunesIcon"
                >
                    <v-icon size="65">
                      {{ 'mdi-spotify' }}
                    </v-icon>
                </a>
            <!-- </v-flex>
            <v-flex xs4> -->
 <a
                :href="'https://www.youtube.com/channel/UC3NSF1Ldq-CdU-7N1bAGFAA'"
                target="_blank"
                class="tunesIcon"
                >
                    <v-icon size="65">
                      {{ 'mdi-youtube' }}
                    </v-icon>
                </a>
            <!-- </v-flex>
            <v-flex xs4> -->
 <a
                :href="'https://music.apple.com/us/artist/dowhileloops/1521112901'"
                target="_blank"
                class="tunesIcon"
                >
                    <v-icon size="65">
                      {{ 'mdi-apple' }}
                    </v-icon>
                </a>
            <!-- </v-flex>
            <v-flex xs4> -->
 <a
                :href="'https://music.amazon.com/artists/B08BY9LTTJ/dowhileloops'"
                target="_blank"
                class="tunesIcon"
                >
                    <v-icon size="65">
                      {{ 'mdi-amazon' }}
                    </v-icon>
                </a>   
            <!-- </v-flex> -->
                      
            </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// https://521dimensions.com/open-source/amplitudejs
import { mapGetters, mapMutations } from 'vuex'
export default {
    name: 'Tech',
    mounted () {
        this.onResponsiveInverted()
        window.addEventListener('resize', this.onResponsiveInverted)
        },
        beforeDestroy () {
        window.removeEventListener('resize', this.onResponsiveInverted)
    },
    data: function () {
        return {
            rows: [],
            aggregation: require('../assets/Aggregation.svg'),
            responsive: false
        }
    },
    methods: {
        onResponsiveInverted () {
            if (window.innerWidth < 780) {
              this.responsive = true
            } else {
              this.responsive = false
            }
        }
    },
    async created () {
        var tryStore = this.$store.getters.getAllShuffledRows;

        if (!tryStore) {
            await this.$store.dispatch('fetchDoWhileData')
        }

        this.rows = this.$store.getters.getAllShuffledRows.filter(x => x.source == 'SoundCloud')
        this.rows = this.rows.slice(0,4);
    }
}
</script>



<style lang="scss">
  .tunesHeader{
        border-color: #0041C2 !important;
  border-style: solid;
  text-align: center;
  border-radius: 25px !important;
  }
  .iconFlex{
    text-align:center;
  }
  
  @media only screen and (min-width: 780px) and (max-width: 910px){
    .iframeRow{
      margin-right: 200px !important;
    }
  }

  .iframeRow{
    text-align:center;
  }
  .tunesIcon{
    padding-left: 75px;
    padding-right:75px;
  }
  
</style>