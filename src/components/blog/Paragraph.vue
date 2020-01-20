<template>
  <div class="pBlok">
    <div> 
      <p class='mr-4 ml-4 blogP'>
        {{ blok.text }}
        </p>
    </div>
  </div>
</template>

<style>
.blogP{
  font-size: 18px !important;
}
</style>

<script>
export default {
  name: 'Paragraph',
  props: ['blok']
}
</script>