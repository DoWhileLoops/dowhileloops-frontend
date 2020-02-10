<template>

  <div class="pBlok">
    
      <template v-if="blok.richText.content[0].type=='code_block'">
        <div class="preBlok">
            <code class="codeBlok">
              {{ blok.richText.content[0].content[0].text }}
            </code>
        </div>
      </template>
      <template v-else>
        <p class="mr-4 ml-4 pBlok">
        <template v-for="component in blok.richText.content[0].content">
            <template v-if="component.hasOwnProperty('marks')">
                <a class="blokA" :href="component.marks[0].attrs.href" :target="component.marks[0].attrs.target">{{ component.text }}</a>
              </template>
            <template v-else>{{ component.text }}</template>
        </template>
        </p>    
      </template>
    
  </div>

</template>

<style>
.preBlok{
  margin: 10px 0px 10px 20px;
}
.codeBlok{
  background-color: #37474f;
  color: #f5f5f5;
  padding: 0px 20px 0px;
  font-size: 16px !important;
  font-weight: 450;
}
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
