<template>
  <div class="MyBlock">
    <img v-bind:src="blok.src">
  </div>
</template>

<script>
export default {
  name: 'BlogImage',
  props: ['blok']
}
</script>