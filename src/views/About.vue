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
        <material-card color="#1276ae">
            <div slot="header">
              <div class="title font-weight-light mb-2">
                DOWHILELOOPS
            </div>
            </div>            
            
            <v-card-text class="text-xs-center">
              <v-layout 
                row
                wrap
              >
              <v-flex 
              sm12
              md9
              >
                <!-- TODO: Redo this copy -->
                <p class="card-description font-weight-light">
                  I'm Chris Clemons, a .NET developer based in Seattle. I've been programming professionally since 2016, and before that, I was a performing musician.
                </p>
                <p class="card-description font-weight-light">
                  DoWhileLoops is meant to showcase work that I have done in both fields, as well as posts that will hopefully inform and entertain fellow enthusiasts.
                </p>
                <p class="card-description font-weight-light">
                  Please feel free to email me, or check out my LinkedIn for more details.
                </p>                
              </v-flex>
              <v-flex
              sm12
              md3>
                <v-avatar
                slot="offset"
                class="mx-auto d-block"
                size="200"
                >
                <img
                  src="../assets/corporateMug.png"
                >
                </v-avatar>
              </v-flex>
              </v-layout>
            <!-- <v-btn
              color="success"
              round
              class="font-weight-light"
            >Follow</v-btn> -->
          </v-card-text>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
export default {
    name: 'About',
}
</script>
