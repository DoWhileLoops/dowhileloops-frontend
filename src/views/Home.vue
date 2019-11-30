/* eslint-disable */
<template>
    <v-container fill-height fluid grid-list-xl>
        <v-layout wrap align-center>
            <v-flex 
                xs6
                md3
                lg3 v-bind:key="filter" v-for="(entry, index) in filterButtons">
                <v-card md3 xs6 :height="60"
                color="#1276ae"
                :item="entry"
                :key="index"
                @click="filter = entry; active = index;"
                :class="{ active: entry == filter }"
                >
                    <h3 class="buttonText">{{entry}}</h3>
                </v-card>
            </v-flex>   
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
                        <h4 class="title font-weight-light">{{row.title}}</h4>
                        <p class="category d-inline-flex font-weight-light">
                          {{row.shortDescription}}
                        </p>
                    </material-content-card>
            </v-flex>
            <v-flex  v-if="rows.length === 0" class="spinner">
                <v-progress-circular indeterminate :size="200" :width="25" color="info"></v-progress-circular>
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
.buttonText{
    color:white;
    text-align:center;
    padding-top: 10px;
}
.spinner{
    text-align:center;
}
</style>