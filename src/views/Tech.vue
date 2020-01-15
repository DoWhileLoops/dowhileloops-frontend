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
          color="#62727b">
          <div
            slot="header"
          >
            <div class="title font-weight-light mb-2">
                The stacked victories in the wake of learning the things.
            </div>
          </div>

          <v-card-text>
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
                      {{row.shortDescription}}
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
        
        this.rows = this.$store.getters.getAllRows.filter(x => x.source == 'GitHub');
        console.log(this.rows);
        
    }
}
</script>