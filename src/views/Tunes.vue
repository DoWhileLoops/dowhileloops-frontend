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
          color="#102027">
          <div
            slot="header"
          >
            <div class="title font-weight-light mb-2">
                The mostly instrumental The Aggregation, available on Spotify now.
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
                  <iframe src="https://open.spotify.com/embed/album/2xfpQQlroOCR1zjlFeke07" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
              </v-flex>
            <v-flex sm6
            xs12
            md6
            lg6 
             >
              <v-img  contain :src="aggregation" height="300px"/>
            </v-flex>
            </v-layout>
            <v-layout
             v-else
            row
            wrap>
            <v-flex
            
            xs12
            md6
            lg6 
             >
              <v-img contain :src="aggregation" height="500px"/>
            </v-flex>
              <v-flex 
              
              xs12
              md6
              lg6 
              >
                  <iframe src="https://open.spotify.com/embed/album/2xfpQQlroOCR1zjlFeke07" width="80%" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
              </v-flex>
            </v-layout>
          </v-card-text>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
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