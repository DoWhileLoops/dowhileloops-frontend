<template>
  <div class="v-offset" style="top: -24px; margin-bottom: -24px;">
    <div class="v-card--material__header v-card v-sheet theme--dark elevation-2 elevation-10 blokHeader mb-4" style="background-color: rgb(18, 118, 174); border-color: rgb(18, 118, 174);">
      <div>
        <div class="title font-weight-light mb-2">
          {{ blok.title }}
        </div>
      </div>
    </div>
  </div>    
</template>

<script>
export default {
  name: 'Title',
  props: ['blok']
}
</script>