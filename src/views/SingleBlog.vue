<template>
    <v-container fill-height grid-list-xl v-if="story">
        <v-layout wrap class="blogLayout">
            <v-flex lg12 v-if="story.content.body.length > 0">
                <div class="v-card v-sheet theme--light elevation-2 pb-4 blogCard" style="margin-bottom: 24px; margin-top: 48px;">
                    <component :key="story.id" :blok="story.content" v-bind:is="story.content.component"></component>
                </div>
            </v-flex>
            <v-flex v-if="story.content.body.length === 0" class="spinner">
                <v-progress-circular indeterminate :size="200" :width="25" color="info"></v-progress-circular>
            </v-flex>
        </v-layout>
    </v-container>    
</template>

<script>

import Page from '../components/blog/Page.vue'
export default {
    name: 'SingleBlog',
    components: {
        Page
    },
    data: function () {
        return {
            story: {
                content:{
                    body: []
                }
            }
        }
    },
    async created () {

        var payload = this.$route.params.id        
        var tryStore = this.$store.getters.getSingleBlog(payload);
        
        if (!tryStore) {
            await this.$store.dispatch('fetchSingleBlog', payload)
        }

        if (typeof this.$store.getters.getSingleBlog(payload) !== 'undefined') {
            this.story = this.$store.getters.getSingleBlog(payload).story
        } else {
            this.$router.push({name: '404, buddy.'}) 
        }
    }
}
</script>

<style>
.blogLayout{
    width: 80%;
}
.blogCard{
    background-color: #62727b !important;
}
.spinner{
    text-align:center;
}
</style>