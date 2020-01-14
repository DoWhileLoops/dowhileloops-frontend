<template>
  <material-card
    v-bind="$attrs"
    class="v-card--material-content"
    v-on="$listeners"
    v-on:click="openCardLink"
  >
    <v-card
      slot="offset"
      v-bind:style="{'background-color': '#271e1e'}"
      class="pa-2"
      dark
    >
      <v-icon
        size="60"
      >
        {{ shownIcon }}
      </v-icon>
    </v-card>
   
    <slot />

    <slot
      slot="actions"
      name="actions"
    />
  </material-card>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    data: {
      type: Object,
      default: () => ({})
    },
    eventHandlers: {
      type: Array,
      default: () => ([])
    },
    options: {
      type: Object,
      default: () => ({})
    },
    ratio: {
      type: String,
      default: undefined
    },
    responsiveOptions: {
      type: Array,
      default: () => ([])
    },
    type: {
      type: String,
      required: true,
      validator: v => ['Bar', 'Line', 'Pie'].includes(v)
    },
    rowData: {
      type: Object,
      default: undefined
    }
  },
  computed: {
    shownIcon: function () {
        if(this.rowData.source == 'GitHub') return 'mdi-github-circle';
        else if(this.rowData.source == 'SoundCloud') return 'mdi-soundcloud';
        else if(this.rowData.source == 'Storyblok') return 'mdi-lead-pencil';
    }
  },
  methods: {
      openCardLink: function () {
        window.open(this.rowData.url, this.rowData.source === 'Storyblok' ? "_self" : "_blank")
      }
  }
}
</script>

<style lang="scss">
  .v-card--material-content {
    cursor: pointer;
    .v-card--material__header {
      .ct-label {
        color: inherit;
        opacity: .7;
        font-size: 0.975rem;
        font-weight: 100;
      }

      .ct-grid{
        stroke: rgba(255, 255, 255, 0.2);
      }
      .ct-series-a .ct-point,
      .ct-series-a .ct-line,
      .ct-series-a .ct-bar,
      .ct-series-a .ct-slice-donut {
          stroke: rgba(255,255,255,.8);
      }
      .ct-series-a .ct-slice-pie,
      .ct-series-a .ct-area {
          fill: rgba(255,255,255,.4);
      }
    }
  }
</style>
