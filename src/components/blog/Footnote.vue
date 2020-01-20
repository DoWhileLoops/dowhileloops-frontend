<template>
  <div>
    <div> 
      <p class='mr-4 ml-4 pItalic text-xs-right'>
        {{ blok.text }}
        </p>
    </div>
  </div>
</template>

<style>
.pItalic {
  font-size: 16px !important;
  font-style: italic;
}
</style>

<script>
export default {
  name: 'Footnote',
  props: ['blok']
}
</script>