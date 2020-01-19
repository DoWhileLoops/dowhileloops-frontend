<template>
    <v-container fill-height fluid grid-list-xl>
        <v-layout
            justify-center
            wrap>
        <v-flex xs12 mt-4>
            <h3 class="text-xs-center">Looks like you're out of luck on that one.</h3>
        </v-flex>
        <v-flex xs12 mt-4>
            <div class="text-xs-center">
            <v-btn
              color="splash"
              round
              class="font-weight-light btn404"
              v-on:click="bringItOnHome"
            >
            Bring it on home
            </v-btn>
            </div>
            
        </v-flex>
        </v-layout>
    </v-container>
</template>

<style>
    .btn404 {
        font-size: 20px;
    }
</style>

<script>
export default {
    name: 'NotFound',
    methods: {
        bringItOnHome () {
            this.$router.push({ name: 'Home'})
        }
    }
}
</script>