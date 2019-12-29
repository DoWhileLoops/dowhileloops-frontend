<template>
  <div class="ma-3">
      <v-img :class="'imgBlk'" contain v-bind:src="blok.src"/>
  </div>
</template>

<style>
.imgBlk{
  cursor: default;
}
@media (min-width: 600px){
.imgBlk{
   height: 400px;
  }
}
  @media (max-width: 599px){
.imgBlk{
   height: 225px;
  }
}
  
</style>

<script>
export default {
  name: 'BlogImage',
  props: ['blok']
}
</script>