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
                    <path id="Union_1" data-name="Union 1" d="M1889.807,254.055c-10.445-23.461,22.806-61.054,74.269-83.967,33.93-15.107,67.306-20.06,89.1-14.958l.261-.13V-133l152-88v104l-128,72V174.807a26.262,26.262,0,0,1,0,11.623V187h0l-.115-.029c-5.042,22.308-34.464,49.843-75.42,68.078-25.333,11.278-50.356,16.9-70.482,16.9C1910.66,271.945,1895.111,265.967,1889.807,254.055Z" transform="translate(-1887.888 221)" fill="#173f67"/>
                </svg>
            </v-flex>
            <v-flex xs8>
                    <h1 class="text-xs-center">DoWhileLoops</h1>
                    <h3 class="text-xs-center">The Catchiest Tagline of Them All.</h3>
                <material-card>
                    <v-layout row>
                        <v-col cols="3">
                        <v-flex 
                            v-bind:key="filter" v-for="(entry, index) in filterButtons"
                            class="buttonCard">
                            <v-card :height="65"
                            color="#1276ae"
                            :item="entry"
                            :key="index"
                            @click="active = index; getShownRows(entry);"
                            :class="{ active: entry == filter }"
                            class="filterCard"
                            >
                                <h2 class="buttonText">{{ entry }}</h2>
                            </v-card>
                        </v-flex>   
                        </v-col>
                        <v-col cols="9" class="cardRow">
                            <v-layout row wrap>
                                <v-flex xs6
                                v-for="row in shownRows"
                                v-if="shownRows.length > 0"  
                                :key="row.uid" 
                                v-bind="row">
                                    <material-content-card
                                    color="info"
                                    type="Line"
                                    v-bind:rowData="row"
                                    >
                                        <h4 class="title font-weight-light">{{ row.title }}</h4>
                                        <p class="category d-inline-flex font-weight-light">
                                        {{ row.shortDescription }}
                                        </p>
                                    </material-content-card>
                                </v-flex>
                                <v-flex v-if="shownRows.length === 0" class="spinner">
                                    <v-progress-circular indeterminate :size="200" :width="25" color="info"></v-progress-circular>
                                </v-flex>
                            </v-layout>                            
                        </v-col>
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
        shownRows: [],
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
            //this.shownRows = this.$store.getters.getAllShuffledRows.slice(0, 4)
            //var reshuffledArr = this.shuffleRows(this.totalRows).slice(0, 4)
            //console.log('thisadfasdf')
            //var reshuffledArr = this.shuffleRows(this.totalRows)
            //this.shownRows = reshuffledArr.slice(0, 4)
            //this.shownRows = this.shuffleRows(this.totalRows).slice(0, 4)
            // this.shownRows = this.totalRows.slice(0, 4)
        } else {
            this.shownRows = this.totalRows.filter(row => row['source'] === this.filters[this.filterButtons.indexOf(chosenFilter)]).slice(0, 4)
        }
    },
    shuffleRows (arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
        return a;
    }
    },
    async created () {
        var tryStore = this.$store.getters.getAllShuffledRows;
        
        if (!tryStore) {
            await this.$store.dispatch('fetchDoWhileData')
        }

        this.totalRows = this.$store.getters.getAllShuffledRows
        this.shownRows = this.totalRows.slice(0, 4)
    }
}
</script>

<style>
.cardRow {
    width: 100%
}
.card-title{
    font-size: 5rem !important;
}
.active{
    text-decoration: underline white;
    text-decoration-skip-ink: none;
    text-underline-position: under;
}
.splashCard{
    background-color: #1276ae !important;
    color:white !important;
}
.buttonText{
    color:white;
    text-align:center;
    padding-top: 10px;
}
.buttonCard{
    cursor: pointer;
}
.filterCard:hover{
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22) !important;
}
.spinner{
    text-align:center;
}

</style>
