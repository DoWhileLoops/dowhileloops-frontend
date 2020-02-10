<template>
    <div>
  <template v-for="item in blok.body">
    <component :key="item._uid" :blok="item" :is="item.component" v-if="item.component !== 'general content'"></component>
  </template>
  </div>
</template>

<script>
import Title from './Title'
import BlogImage from './BlogImage'
import RichParagraph from './RichParagraph'
import SectionTitle from './SectionTitle'
import Paragraph from './Paragraph'
import Footnote from './Footnote'
export default {
  name: 'Page',
  components: {
    Title,
    BlogImage,
    RichParagraph,
    SectionTitle,
    Paragraph,
    Footnote
  },
  props: ['blok']
}
</script>