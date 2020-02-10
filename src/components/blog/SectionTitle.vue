<template>
  <div class="sectionTitleBlok">
    <p class="mr-4 ml-4 sectionTitleBlok">
        <template v-for="component in blok.richText.content[0].content">
          {{ component.text }}
        </template>
    </p>    
  </div>
</template>

<style>
.sectionTitleBlok{
  font-size: 20px !important;
  text-decoration:underline;
  font-weight: 550 !important;
}
</style>

<script>
export default {
  name: 'SectionTitle',
  props: ['blok']
}
</script>
