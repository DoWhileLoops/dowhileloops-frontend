<template>
  <div class="pBlok">
    <div> 
      <p class='mr-4 ml-4'>
        {{ blok.text }}
        </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Paragraph',
  props: ['blok']
}
</script>