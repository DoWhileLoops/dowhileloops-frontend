<template>
  <v-content>
    <div id="core-view">
      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
    </div>
    <core-footer v-if="$route.name !== 'Maps'" />
  </v-content>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: 'DoWhileLoops'
    }
  }
}
</script>

<style>
#core-view {
  position:static;
  min-height: calc(100vh - 120px);
}
</style>
