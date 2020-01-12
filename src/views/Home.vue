/* eslint-disable */
<template>
    <v-container fill-height fluid grid-list-xl>
        <v-layout wrap align-center>
            <v-flex xs12>
                <material-card class="splashCard">
                
                <v-card-text class="text-xs-center">
                    <!-- TODO: write copy and get logo, arrange 
                                also navbar title if !responsive
                                also text resize here -->
                    <!-- <h1 class="card-title">DoWhileLoops</h1> -->
                </v-card-text>
                </material-card>
            </v-flex>
            <v-flex xs12>
                <material-card>
                    <v-layout row wrap>
                        <v-flex 
                            xs6
                            md3
                            lg3 v-bind:key="filter" v-for="(entry, index) in filterButtons"
                            class="buttonCard">
                            <v-card md3 xs6 :height="80"
                            color="#1276ae"
                            :item="entry"
                            :key="index"
                            @click="filter = entry; active = index;"
                            :class="{ active: entry == filter }"
                            class="filterCard"
                            >
                                <h2 class="buttonText">{{ entry }}</h2>
                            </v-card>
                        </v-flex>   
                        </v-layout>
                        <hr>
                    <v-layout row wrap>
                        <v-flex sm6
                            xs12
                            md6
                            lg3 
                            v-for="row in rows" 
                            v-if="rows.length > 0 && (row['source'] === filters[filterButtons.indexOf(filter)] || filter === 'All')"  
                            v-bind:key="row.uid" 
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
                        <v-flex v-if="rows.length === 0" class="spinner">
                            <v-progress-circular indeterminate :size="200" :width="25" color="info"></v-progress-circular>
                        </v-flex>
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
    data: function () {
        return {
        fKey: "source",
        filterButtons: ['Tech', 'Tunes', 'Blog', 'All'],
        filters: ['GitHub', 'SoundCloud', 'Storyblok', 'All'],
        filter: "All",
        rows: []
        }
    },
    async created () {
        var tryStore = this.$store.getters.getAllShuffledRows;
        
        if (!tryStore) {
            await this.$store.dispatch('fetchDoWhileData')
        }

        this.rows = this.$store.getters.getAllShuffledRows
    }
}
</script>

<style>
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
