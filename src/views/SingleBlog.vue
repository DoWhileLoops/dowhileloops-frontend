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

        if(typeof this.$store.getters.getSingleBlog(payload) !== 'undefined'){
            this.story = this.$store.getters.getSingleBlog(payload).story;
        }else{
            this.$router.push({name:'NotFound'}) 
        }

    }
}
</script>