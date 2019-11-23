<template>
    <div v-if="story">
        <component :key="story.id" :blok="story.content" v-bind:is="story.content.component"></component>
    </div>
        
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

        this.story = this.$store.getters.getSingleBlog(payload).story;

        console.log(this.story)

        //TODO: REDIRECT IF NO STORY!
    }
}
</script>