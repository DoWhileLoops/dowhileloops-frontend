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
          color="#1276ae">
          <div
            slot="header"
          >
            <div class="title font-weight-light mb-2">
                The aggregated results of a mostly healthy fascination with music.
            </div>
          </div>

          <v-card-text>
            <v-layout
            row
            wrap>
            <v-flex sm6
            xs12
            md6
            lg6 
             >
                <iframe width="100%" height="400" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/590946879&color=%23091826&auto_play=false&hide_related=true&show_comments=true&show_user=false&show_reposts=false&show_teaser=true&visual=false"></iframe>
            </v-flex>
            <v-flex sm6
            xs12
            md6
            lg6 
             >
                <iframe src="https://open.spotify.com/embed/playlist/676IRGFDzNZRikFy2ZjZ8D" width="100%" height="400" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </v-flex>
            </v-layout>
            <hr>
            <v-layout
              row
              wrap>
              <v-flex sm6
                xs12
                md6
                lg3 
                v-for="row in rows" 
                v-bind:key="row.uid" 
                v-bind="row">
                 <material-content-card
                      color="info"
                      type="Line"
                      v-bind:rowData="row"
                    >
                    <h4 class="title font-weight-light">{{row.title}}</h4>
                    <p class="category d-inline-flex font-weight-light">
                      {{ row.shortDescription }}
                    </p>
                </material-content-card>
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
    data: function () {
        return {
            rows: []
        }
    },
    async created () {
        var tryStore = this.$store.getters.getAllRows;

        if (!tryStore) {
            await this.$store.dispatch('fetchDoWhileData')
        }

        this.rows = this.$store.getters.getAllShuffledRows.filter(x => x.source == 'SoundCloud');
        this.rows = this.rows.slice(0,8);
    }
}
</script>