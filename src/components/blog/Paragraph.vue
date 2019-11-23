<template>
  <div class="MyBlock">
    <div> 
      <p>
        {{blok.text}}
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