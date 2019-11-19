  <template>
  <material-card
    v-bind="$attrs"
    class="v-card--material-link"
    v-on="$listeners"
    v-on:click="openCardLink"
  >
    <v-card
      slot="offset"
      :class="`elevation-${elevation}`"
      v-bind:style="{'background-color': iconBackgroundColor}"
      class="pa-4"
      dark
    >
      <v-icon
        size="60"
      >
        {{ shownIcon }}
      </v-icon>
    </v-card>
    <div class="text-xs-right">
      <p
        class="category grey--text font-weight-light"
        v-text="title"
      />
      <h3
        class="title display-1 font-weight-light">
        {{ rowData.title }} 
      </h3>      
    </div>

    <template slot="actions">
      <v-icon
        :color="subIconColor"
        size="20"
        class="mr-2"
      >
        {{ subIcon }}
      </v-icon>
      <span
        :class="subTextColor"
        class="caption font-weight-light"
        v-text="subText"
      />
    </template>
  </material-card>
</template>

<script>
import Card from './Card'

export default {
  inheritAttrs: false,

  props: {
    ...Card.props,
    icon: {
      type: String,
      required: true
    },
    subIcon: {
      type: String,
      default: undefined
    },
    subIconColor: {
      type: String,
      default: undefined
    },
    subTextColor: {
      type: String,
      default: undefined
    },
    subText: {
      type: String,
      default: undefined
    },
    title: {
      type: String,
      default: undefined
    },
    value: {
      type: String,
      default: undefined
    },
    smallValue: {
      type: String,
      default: undefined
    },
    rowData: {
      type: Object,
      default: undefined
    }
  },
  computed: {
    shownIcon: function() {
        if(this.rowData.source == 'GitHub') return 'mdi-github-circle';
        else if(this.rowData.source == 'SoundCloud') return 'mdi-soundcloud';
        else if(this.rowData.source == 'Storyblok') return 'mdi-lead-pencil';
    },
    iconBackgroundColor: function() {
            if(this.rowData.source == 'GitHub') return '#24292e';
            else if(this.rowData.source == 'SoundCloud') return '#f50';
            else if(this.rowData.source == 'Storyblok') return '#1276AE';
        }
  },
  methods: {
      openCardLink: function() {
        //TODO: come back once blog routing figured out
        window.open(this.rowData.url, this.rowData.source === 'Storyblok' ? "_self" : "_blank")
      }
  }
}
</script>

<style lang="scss">
.v-card--material-link {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  cursor: pointer;

  .v-offset {
    display: inline-block;
    flex: 0 1;
    margin-top: 0;
    margin-left: 0;
    margin-right: auto;
    margin-bottom: 0 !important;
    max-width: auto;
    padding: 0 16px 0;
  }

  .v-card {
    border-radius: 4px;
    flex: 0 1 auto;
  }

  .v-card__text {
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
  }

  .v-card__actions {
    flex: 1 0 100%;
  }
}
</style>
