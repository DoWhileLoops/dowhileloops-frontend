<template>
    <h1>{{$route.params.id}}</h1>
</template>

<script>
export default {
    name: 'SingleBlog',
    data: function () {
        return {
            blogData: null,
        }
    },
    async created () {
        
        var payload = this.$route.params.id        
        var tryStore = this.$store.getters.getSingleBlog(payload);
        
        if (!tryStore) {
            await this.$store.dispatch('fetchSingleBlog', payload)
        }

        this.blogData = this.$store.getters.getSingleBlog(payload);
    }
}
</script>