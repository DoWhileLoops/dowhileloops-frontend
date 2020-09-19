/* eslint-disable */
<template>
    <v-container fill-height fluid grid-list-xl>
        <v-layout v-if="responsive" row wrap align-center>
            <v-flex xs12>
                <h3 class="text-xs-center">I'm Chris Clemons. I type code and write music.</h3>
                    <h3 class="text-xs-center">Can play C# in both.</h3>
            </v-flex>
            <v-flex xs12>
                <router-link to='tech'>
                            <NavLink :active="isActive" :href="href">
                                    <v-img class="contentLink" contain :src="bracketLink" height="200px"/>
                            </NavLink>
                        </router-link>
            </v-flex>
            <v-flex xs12>
                <router-link to='tunes'>
                            <NavLink :active="isActive" :href="href">
                                    <v-img class="contentLink" contain :src="musicLink" height="200px"/>
                            </NavLink>
                        </router-link>
            </v-flex>
        </v-layout>
        <v-layout v-else row wrap align-center mt-5>
            <v-flex md5 lg5>    
                <v-img contain :src="logo" height="615px"/>
            </v-flex>
            <v-flex md7 lg7>
                <h1 class="text-xs-center">DoWhileLoops</h1>
                <h3 class="text-xs-center">I'm Chris Clemons. I type code and write music.</h3>
                <h3 class="text-xs-center">Can play C# in both.</h3>
                <v-layout row>
                    <v-flex xs6>
                        <router-link to='tech'>
                            <NavLink :active="isActive" :href="href">
                                    <v-img class="contentLink" contain :src="bracketLink" height="315px"/>
                            </NavLink>
                        </router-link>
                    </v-flex>   
                    <v-flex xs6>
                        <router-link to='tunes'>
                            <NavLink :active="isActive" :href="href">
                                    <v-img class="contentLink" contain :src="musicLink" height="315px"/>
                            </NavLink>
                        </router-link>
                    </v-flex>   
                </v-layout> 
            </v-flex>
        </v-layout>        
    </v-container>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
    name: 'Home',
    mounted () {
        this.onResponsiveInverted()
        window.addEventListener('resize', this.onResponsiveInverted)
        },
        beforeDestroy () {
        window.removeEventListener('resize', this.onResponsiveInverted)
    },
    data: function () {
        return {
        fKey: "source",
        filterButtons: ['Tech', 'Tunes', 'Blog', 'Refresh'],
        filters: ['GitHub', 'SoundCloud', 'Storyblok', 'Refresh'],
        filter: "Refresh",
        totalRows: [],
        reversedRows: [],
        responsive: false,
        logo: require('../assets/DoWhileLogo.svg'),
        bracketLink: require('../assets/BracketLink.svg'),
        musicLink: require('../assets/MusicLink.svg')
        }
    },
    methods: {
        onResponsiveInverted () {
            if (window.innerWidth < 991) {
              this.responsive = true
            } else {
              this.responsive = false
            }
        }
    },
    async created () {
        var tryStore = this.$store.getters.getAllShuffledRows
        
        if (!tryStore) {
            await this.$store.dispatch('fetchDoWhileData')
        }

        this.totalRows = this.$store.getters.getAllShuffledRows
        this.reversedRows = [...this.totalRows]
        this.reversedRows.reverse()
    }
}
</script>

<style lang="scss">
    .contentLink:hover {
      cursor: pointer;
       box-shadow: 0 10px 10px -9px #2c84f6, 0 10px 10px -9px  #2c84f6 !important;
    }
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