<template>
  <div class="pBlok">
    <p class="mr-4 ml-4 pBlok">
        <template v-for="component in blok.richText.content[0].content">
            <template v-if="component.hasOwnProperty('marks')">
                <a class="blokA" :href="component.marks[0].attrs.href" :target="component.marks[0].attrs.target">{{ component.text }}</a>
              </template>
            <template v-else>{{ component.text }}</template>
        </template>
    </p>    
  </div>
</template>

<style>
.blokA {
    text-decoration: underline !important;
    color: #f5f5f5 !important;
}
.pBlok{
  font-size: 16px !important;
}
</style>

<script>
export default {
  name: 'RichParagraph',
  props: ['blok']
}
</script>
