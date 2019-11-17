<template>
    <v-container fill-height fluid grid-list-xl>
        <v-layout wrap>
            <v-flex sm6
                xs12
                md6
                lg3 
                v-for="row in rows" v-bind:key="row.uid" v-bind="row">
                <material-link-card
                color="green"
                icon="mdi-store"
                title="Revenue"
                value="$34,245"
                sub-icon="mdi-calendar"
                sub-text="asdf"
                v-bind:rowData="row"
                />
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Home',
    computed: {
        rows () {
            return this.$store.getters.getAllRows
        } 
    }
}
</script>