<template>
    <div>
  <template v-for="item in blok.body">
    <component :key="item._uid" :blok="item" :is="item.component" v-if="item.component !== 'general content'"></component>
  </template>
  </div>
</template>

<script>
import Title from './Title'
import Paragraph from './Paragraph'
import BlogImage from './BlogImage'
export default {
  name: 'Page',
  components: {
    Title,
    Paragraph,
    BlogImage
  },
  props: ['blok']
}
</script>