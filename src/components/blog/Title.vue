<template>
  <div class="v-offset" style="top: -24px; margin-bottom: -24px;">
    <div class="v-card--material__header v-card v-sheet theme--dark elevation-2 elevation-10 mb-4 blogTitle" 
    style="background-color: rgb(18, 118, 174); border-color: rgb(18, 118, 174);">
          <h3 class="blogTitleText">{{ blok.title }}</h3>
    </div>
  </div>    
</template>

<style>
.blogTitleText{
  color: #2c84f6 !important; 
}
.blogTitle{
  background-color: #102027 !important;
}
</style>

<script>
export default {
  name: 'Title',
  props: ['blok']
}
</script>