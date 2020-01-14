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

        <v-layout v-else row wrap align-center>
            <v-flex xs4>    
                <svg xmlns="http://www.w3.org/2000/svg" width="317.55" height="492.945" viewBox="0 0 317.55 492.945">
                    <path id="Union_1" data-name="Union 1" d="M1889.807,254.055c-10.445-23.461,22.806-61.054,74.269-83.967,33.93-15.107,67.306-20.06,89.1-14.958l.261-.13V-133l152-88v104l-128,72V174.807a26.262,26.262,0,0,1,0,11.623V187h0l-.115-.029c-5.042,22.308-34.464,49.843-75.42,68.078-25.333,11.278-50.356,16.9-70.482,16.9C1910.66,271.945,1895.111,265.967,1889.807,254.055Z" transform="translate(-1887.888 221)" fill="#062C53"/>
                </svg>
            </v-flex>
            <v-flex xs8>
                    <h1 class="text-xs-center brandTitle">DoWhileLoops</h1>
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
                        :height="250"
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
        responsive: false
        }
    },
    methods: {
        onResponsiveInverted () {
            if (window.innerWidth < 991) {
              this.responsive = true
            } else {
              this.responsive = false
            }
    },
        getShownRows (chosenFilter) {
            this.filter = chosenFilter
            if (chosenFilter === 'Refresh') {
                
            } else {
                this.shownRows = this.totalRows.filter(row => row['source'] === this.filters[this.filterButtons.indexOf(chosenFilter)]).slice(0, 4)
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
