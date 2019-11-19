<template>
    <div>
        <h1>{{$route.params.id}}</h1>
        <h1>{{story}}</h1>
    </div>
</template>

<script>
export default {
    name: 'SingleBlog',
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

        this.story = this.$store.getters.getSingleBlog(payload);
    }
}
</script>