<template>
  <div class="MyBlock">
    <div> 
      <h1>
        {{blok.title}}
        </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: ['blok']
}
</script>