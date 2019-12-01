<template>
  <div class="imgBlok mb-4 mt-4">
      <v-img v-bind:src="blok.src"/>
  </div>
</template>

<script>
export default {
  name: 'BlogImage',
  props: ['blok']
}
</script>