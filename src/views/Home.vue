/* eslint-disable */
<template>
  <v-container v-if="tinyresponsive" fill-height fill-width fluid grid-list-xl class="tinyResponsiveContainer">
    <v-layout row wrap align-center justify-center class="tinyResponsiveLayout">

        <v-bottom-sheet
          v-model="sheet"
          inset
          class="musicPlayer"
        >
          <v-sheet
              class="text-center sheetTinyResponsive"
              height="500px"
          >
          <MusicPlayer/>
          </v-sheet>
      </v-bottom-sheet>
          <v-flex xs12 s12 md12 class="imgFlexSplashTinyResponsive">
          <v-img contain :src="dwlSplash" class="imgSplashTinyResponsive" >
              </v-img> 
          </v-flex>
                <v-flex xs12 s12 md12 class="splashFlexTinyResponsive">
                  <h2 class="main tinyResponsiveLogo">DoWhileLoops</h2>
                  <h3 class="">Music you very well may enjoy.</h3>
                  <v-btn
                      color="splash"
                      round
                      class="font-weight-light bioBtnResponsive"
                      @click.stop="listenHereClick"
                  >
                      <h3>Listen Here</h3>
                  </v-btn>
              </v-flex> 
      </v-layout>    
  </v-container>

  <v-container v-else-if="responsive" fill-height fluid grid-list-xl class="responsiveContainer">
      <v-bottom-sheet
          v-model="sheet"
          inset
          class="musicPlayer"
      >
          <v-sheet
              class="text-center sheetResponsive"
              height="700px"
          >
            <MusicPlayer/>
          </v-sheet>
      </v-bottom-sheet>
      <v-layout row wrap align-center justify-center class="responsiveLayout">
          <v-flex xs12 s12 md12 class="imgFlexSplashResponsive">
          <v-img contain :src="dwlSplash" class="imgSplashResponsive" >
              </v-img> 
          </v-flex>
          <v-flex xs12 s12 md12 class="splashFlexResponsive">
              <h2 class="main responsiveLogo">DoWhileLoops</h2>
              <h3 class="">Music you very well may enjoy.</h3>
              <v-btn
                  color="splash"
                  round
                  class="font-weight-light bioBtnResponsive"
                  @click.stop="listenHereClick"
              >
                  <h3>Listen Here</h3>
              </v-btn>
          </v-flex> 
      </v-layout>                               
  </v-container>
  <v-container v-else fill-height fluid grid-list-xl text-xs-center class="nonResponsiveContainer">
      <v-bottom-sheet
          v-model="sheet"
          inset
          class="musicPlayer"
      >
          <v-sheet
              class="text-center sheetFullSize"
              height="745px"
          >
            <MusicPlayer/>          
          </v-sheet>
      </v-bottom-sheet>
      <v-img :src="dwlSplash" class="imgSplashFull" >
          <v-layout row wrap align-center>
              <v-flex md7 lg7 class="splashFlex">
                  <h1 class="main logo">DoWhileLoops</h1>
                  <h2 class="">Music you very well may enjoy.</h2>
                  <v-btn
                      color="splash"
                      round
                      class="font-weight-light bioBtn"
                      @click.stop="listenHereClick"
                  >
                      <h3>Listen Here</h3>
                  </v-btn>
              </v-flex>
          </v-layout>
      </v-img> 
  </v-container>
</template>

<script>
import MusicPlayer from '../components/musicPlayer/MusicPlayer'
export default {
    name: 'Home',
    components: {
      MusicPlayer
    },
    data: function () {
        return {
        fKey: "source",
        sheet: false,
        filterButtons: ['Tech', 'Tunes', 'Blog', 'Refresh'],
        filters: ['GitHub', 'SoundCloud', 'Storyblok', 'Refresh'],
        filter: "Refresh",
        responsive: false,
        tinyresponsive: false,
        logo: require('../assets/DoWhileLogo.svg'),
        bracketLink: require('../assets/BracketLink.svg'),
        musicLink: require('../assets/MusicLink.svg'),
        dwlSplash: require('../assets/dwlSplash.png')
        }
    },
    methods: {
        listenHereClick() {
            this.sheet = !this.sheet
        },
        onResponsiveInverted () {
             if (window.innerWidth < 991) {
              this.responsive = true
              if(window.innerWidth < 551){
                  this.tinyresponsive = true;
              }
              else
                this.tinyresponsive = false;
            } else {
              this.responsive = false
              this.tinyresponsive = false;
            }
        }
    },
    mounted () {
            this.onResponsiveInverted()
            window.addEventListener('resize', this.onResponsiveInverted)
        },
        beforeDestroy () {
        window.removeEventListener('resize', this.onResponsiveInverted)
    }
}
</script>

<style lang="scss">
    .contentLink:hover {
      cursor: pointer;
       box-shadow: 0 10px 10px -9px #2c84f6, 0 10px 10px -9px  #2c84f6 !important;
    }
  #app-drawer {
    .v-list__tile {
      border-radius: 4px;

      &--buy {
        margin-top: auto;
        margin-bottom: 17px;
      }
    }
  }
  .v-bottom-sheet{
   background-color: #000000 !important;
   //height: 100%;

   //height:1000px !important;
   overflow: auto !important;
  }
  .v-sheet{
      background-color: #000000 !important;
  }
  .v-dialog{
      max-height:95% !important;
  }   
  .nonResponsiveContainer{
      margin: 0;
      padding: 0;
  }
  .responsiveContainer{
   margin-top: calc(0% - 70px);
   width: 99%;
   height: 100%;
   padding:0;
   margin-right:0;
  }
  .tinyResponsiveContainer{
   margin-top: calc(0% - 120px);
   width: 100%;
   height: 100%;
   padding:0;   
   margin-right:0;
  }
  .responsiveLayout{

     margin:0 !important;
     padding:0 !important;
     width:100%;
     height:100%;
  }  
  .tinyResponsiveLayout{

     margin:0 !important;
     padding:0 !important;
     width:100%;
     height:100%;
  }  
  .imgSplashFull{

      width: 100%;
      margin: -64px 0 0 0;
      height: 100%;
 
  }
  .imgSplashResponsive{
      width: auto;
  }
  .imgSplashTinyResponsive{
      width: auto;
  }
  .imgFlexSplashResponsive{
      padding: 0 0 0 0 !important;
  }
  .imgFlexSplashTinyResponsive{
      padding: 0 0 0 0 !important;
  }
  .splashFlex{
    margin-top: 20%;
    margin-left: 2%
  }
  .splashFlexResponsive{
      text-align: center;
      margin-top: -20%;
      z-index: 100;
  }
  .splashFlexTinyResponsive{
      text-align: center;
      margin-top: -20%;
      z-index: 100;
  }
  .bioBtn{
  height:75px;
  width: 500px;
  background: rgba(0, 0, 0, 0) !important; 
  border-color: #0041C2 !important;
  border-style: solid;
}
.bioBtnResponsive{
  background: rgba(0, 0, 0, 0) !important; 
  border-color: #0041C2 !important;
  border-style: solid;
}
.responsiveLogo{
    font-size: 3.5em !important;
    margin-bottom: 5px !important;
}
</style>