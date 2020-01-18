/* eslint-disable */
<template>
    <v-container fill-height fluid grid-list-xl>
        <v-layout v-if="responsive" row wrap align-center>
            <material-card class="splashCard">
                
                <v-card-text class="text-xs-center">
                    STUFF HERE
                </v-card-text>
                </material-card>
        </v-layout>

        <v-layout v-else row wrap align-center mt-1>
            <v-flex lg5>    
                <v-img contain :src="logo" height="700px"/>
            </v-flex>
            <v-flex lg7>
                    <h1 class="text-xs-center brandTitle">DoWhileLoops</h1>
                    <h3 class="text-xs-center brandTitle">This is a catchy tagline.</h3>
                <material-card
                    class="carouselCard"
                    >
                    <!-- https://vuetifyjs.com/en/components/carousels -->
                    <v-layout row>
                        <v-carousel
                        :hide-delimiters="true"
                        :show-arrows="false"
                        :show-arrows-on-hover="false"
                        :next-icon="false"
                        :prev-icon="false"
                        :height="300"
                        :interval="8000"
                        
                        class="elevation-0">
                            <v-carousel-item
                            v-for="(row, index) in totalRows"
                            :key="row.uid"
                            v-bind="row"
                            >
                                <v-layout row>
                                    <v-flex xs6>
                                    <material-content-card
                                            v-bind:rowData="row"
                                            xs6
                                            >
                                                <h4 class="title font-weight-light">{{ row.title }}</h4>
                                                <p class="category d-inline-flex font-weight-light">
                                                {{ row.shortDescription }}
                                                </p>
                                            </material-content-card>
                                    </v-flex>
                                    <v-flex xs6>
                                        <material-content-card
                                        v-bind:rowData="reversedRows[index]"
                                        xs6
                                        >
                                            <h4 class="title font-weight-light">{{ reversedRows[index].title }}</h4>
                                            <p class="category d-inline-flex font-weight-light">
                                            {{ reversedRows[index].shortDescription }}
                                            </p>
                                        </material-content-card>
                                    </v-flex>
                                </v-layout>                            
                            </v-carousel-item>
                        </v-carousel>
                        </v-layout>
                </material-card>
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
        logo: require('../assets/DoWhileLogo.svg')
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
