/* eslint-disable */
<template>
    <v-container fill-height fluid grid-list-xl>
        <v-layout wrap>
            <v-flex xs12 v-bind:key="filter">
                <v-btn 
                color="success"
                v-for="(entry, index) in filterButtons"
                :item="entry"
                :key="index"
                @click="filter = entry; active = index;"
                :class="{ active: entry == filter }"
                >
                    {{entry}}
                </v-btn>
            </v-flex>
            <v-flex sm6
                xs12
                md6
                lg3 
                v-for="row in rows" 
                v-if="row['source'] === filters[filterButtons.indexOf(filter)] || filter === 'All'"  
                v-bind:key="row.uid" 
                v-bind="row">
                    <material-link-card
                        v-bind:rowData="row"
                        title="Revenue"
                        value="$34,245"
                        sub-icon="mdi-calendar"
                        sub-text="asdf"
                    />
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
        filterButtons: ['Tech', 'Tunes', 'Tips & Tricks', 'All'],
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