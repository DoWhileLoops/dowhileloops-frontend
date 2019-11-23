<template>
  <div class="MyBlock">
    <!--
    The _editable attribute makes the next
    DOM-element clickable so the side by side editor can
    show the right component.
    -->
     <div v-editable="blok"> <!--class="teaser__inner"> -->
      <h1>
        <!--
        You can access every attribute you
        define in the schema in the blok variable
        -->
        {{blok.myValue1}}
        </h1>
        <h2>
          Here is some hardcoded text.
          {{blok.myValue2}}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyBlock',
  props: ['blok']
}
</script>