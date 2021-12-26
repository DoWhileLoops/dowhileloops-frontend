/* eslint-disable */
<template>
    <div class="example-container">
        <div class="left">
            <div id="white-player">
                <div class="white-player-top">
                    <div>
                        &nbsp;
                    </div>
                    <div class="center">
                    </div>
                    <div>
                        <v-icon class="show-playlist playlist-toggle-button" size="32">mdi-arrow-down-drop-circle-outline </v-icon>
                    </div>
                </div>
                <div id="white-player-center">
                    <img data-amplitude-song-info="cover_art_url" data-amplitude-playlist="dwlTunes" 
                        :class="{'main-album-art':true, 'main-album-art-fullsize': this.fullsize, 'main-album-art-responsive': this.responsive, 'main-album-art-tinyresponsive': this.tinyresponsive}"/>
                    <div class="song-meta-data">
                        <span data-amplitude-song-info="name" data-amplitude-playlist="dwlTunes" :class="{'song-name':true, 'song-name-fullsize': this.fullsize, 'song-name-responsive': this.responsive, 'song-name-tinyresponsive': this.tinyresponsive}"></span>
                    </div>
                    <div class="time-progress">
                    <div id="progress-container">
                        <input type="range" class="amplitude-song-slider" step=".1" data-amplitude-playlist="dwlTunes"/>
                        <progress id="song-played-progress" class="amplitude-song-played-progress" amplitude-main-song-played-progress="true" data-amplitude-playlist="dwlTunes"></progress>
                        <progress id="song-buffered-progress" class="amplitude-buffered-progress" value="0"></progress>
                    </div>
                    <div class="time-container">
                        <span class="current-time">
                            <span class="amplitude-current-minutes" data-amplitude-playlist="dwlTunes"></span>:<span class="amplitude-current-seconds" data-amplitude-playlist="dwlTunes"></span>
                        </span>
                    </div>
                        <span class="duration">
                            <span class="amplitude-duration-minutes" data-amplitude-playlist="dwlTunes"></span>:<span class="amplitude-duration-seconds" data-amplitude-playlist="dwlTunes"></span>
                        </span>
                    </div>
                </div>
                <div id="white-player-controls">
                    <div :class="{'amplitude-shuffle':true, 'amplitude-shuffle-off':true, 'amplitude-shuffle-fullsize': this.fullsize, 'amplitude-shuffle-responsive': this.responsive, 'amplitude-shuffle-tinyresponsive': this.tinyresponsive}" data-amplitude-playlist="dwlTunes"  id="shuffle"></div>
                    <div :class="{'amplitude-prev':true, 'amplitude-prev-fullsize': this.fullsize, 'amplitude-prev-responsive': this.responsive, 'amplitude-prev-tinyresponsive': this.tinyresponsive}" data-amplitude-playlist="dwlTunes" id="previous"></div>
                    <div :class="{'amplitude-play-pause':true, 'amplitude-paused':true, 'amplitude-play-pause-fullsize': this.fullsize, 'amplitude-play-pause-responsive': this.responsive, 'amplitude-play-pause-tinyresponsive': this.tinyresponsive}" data-amplitude-playlist="dwlTunes" id="play-pause"></div>
                    <div :class="{'amplitude-next':true, 'amplitude-next-fullsize': this.fullsize, 'amplitude-next-responsive': this.responsive, 'amplitude-next-tinyresponsive': this.tinyresponsive}" data-amplitude-playlist="dwlTunes" id="next"></div>
                    <div :class="{'amplitude-repeat':true, 'amplitude-repeat-off':true, 'amplitude-repeat-fullsize': this.fullsize, 'amplitude-repeat-responsive': this.responsive, 'amplitude-repeat-tinyresponsive': this.tinyresponsive}" data-amplitude-playlist="dwlTunes" id="repeat"></div>
                </div>
                <v-layout>
                    <div id="white-player-playlist-container" :class="{'playlist-container-fullsize': this.fullsize, 'playlist-container-responsive': this.responsive, 'playlist-container-tinyresponsive': this.tinyresponsive}">
                        <div class="white-player-playlist-top">
                            <div>
                                <v-icon class="close-playlist playlist-toggle-button" size="32">mdi-arrow-up-drop-circle-outline </v-icon>
                            </div>
                        </div>
                        <div class="white-player-playlist">
                            <div v-for="song in songs" v-bind:key="song.name" class="amplitude-song-container amplitude-play-pause" :data-amplitude-song-index="song.uid" data-amplitude-playlist="dwlTunes">
                                <div v-if="song.isFirstTrack">
                                    <div class="white-player-playlist-song amplitude-song-container white-player-albumart-container">
                                        <img class="playlist-album-art" :src="song.cover_art_url"/>
                                        <span class="playlist-artist-album">{{song.album}}</span>
                                    </div>
                                </div>
                                <div class="white-player-playlist-song amplitude-song-container amplitude-play-pause">
                                    <div class="playlist-song-meta">
                                        <span class="playlist-song-name">{{song.name}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </v-layout>
            </div>
        </div>
    </div> 
</template>

<script>

import Amplitude from 'amplitudejs'

var titleAggregation = 'The Aggregation';
var titleDelineation = 'The Delineation';
var titleIteration = 'The Iteration';
var urlRoot = 'https://dowhileloopsstorage.blob.core.windows.net/dowhilemusic/';
var coverartAggregation = urlRoot + 'AggregationV3.jpg';
var coverartDelineation = urlRoot + 'TheDelineation2.png';
var coverartIteration = urlRoot + 'TheIteration.png';
var doWhileLoops = 'DoWhileLoops';
var songs = [
        {
          "name": "Never Mind All That",
          "artist": doWhileLoops,
          "album": titleAggregation,
          "url": urlRoot + "NeverMindAllThat.mp3",
          "cover_art_url": coverartAggregation,
          "uid":0,
          "isFirstTrack": true
        },
		{
          "name": "Stash Pop's Workshop",
          "artist": doWhileLoops,
          "album": titleAggregation,
          "url": urlRoot + "Stash.mp3",
          "cover_art_url": coverartAggregation,
          "uid":1
        },
		{
          "name": "The Galway Delay",
          "artist": doWhileLoops,
          "album": titleAggregation,
          "url": urlRoot + "GalwayDelay.mp3",
          "cover_art_url": coverartAggregation,
          "uid":2
        },
		{
          "name": "Night At The Synthsonian",
          "artist": doWhileLoops,
          "album": titleAggregation,
          "url": urlRoot + "Synthsonian.mp3",
          "cover_art_url": coverartAggregation,
          "uid":3
        },
		{
          "name": "You Guessed 'Er, Chester",
          "artist": doWhileLoops,
          "album": titleAggregation,
          "url": urlRoot + "YouGuessedErChester.mp3",
          "cover_art_url": coverartAggregation,
          "uid":4
        },
		{
          "name": "The Contact Page Blues",
          "artist": doWhileLoops,
          "album": titleAggregation,
          "url": urlRoot + "ContactPageBlues.mp3",
          "cover_art_url": coverartAggregation,
          "uid":5
        },
		{
          "name": "What's So Hard About That",
          "artist": doWhileLoops,
          "album": titleAggregation,
          "url": urlRoot + "WhatsSoHard.mp3",
          "cover_art_url": coverartAggregation,
          "uid":6
        },
		
        {
          "name": "Spread It On",
          "artist": doWhileLoops,
          "album": titleDelineation,
          "url": urlRoot + "SpreadItOn.mp3",		  
          "cover_art_url": coverartDelineation,
          "uid":7,
          "isFirstTrack": true
        },
		{
          "name": "I Don't Know What To Tell You",
          "artist": doWhileLoops,
          "album": titleDelineation,
          "url": urlRoot + "IDontKnowWhatToTellYou.mp3",		  
          "cover_art_url": coverartDelineation,
          "uid":8
        },
		
		{
          "name": "Riffus Interruptus",
          "artist": doWhileLoops,
          "album": titleDelineation,
          "url": urlRoot + "RiffusInterruptus.mp3",		  
          "cover_art_url": coverartDelineation,
          "uid":9
        },
		{
          "name": "Throw The Heat",
          "artist": doWhileLoops,
          "album": titleDelineation,
          "url": urlRoot + "ThrowTheHeat.mp3",		  
          "cover_art_url": coverartDelineation,
          "uid":10
        },
		{
          "name": "Yes You Can",
          "artist": doWhileLoops,
          "album": titleDelineation,
          "url": urlRoot + "YesYouCan.mp3",		  
          "cover_art_url": coverartDelineation,
          "uid":11
        },
		{
          "name": "That Kid In The Upstairs Apartment Must Weigh 500 Pounds",
          "artist": doWhileLoops,
          "album": titleDelineation,
          "url": urlRoot + "ThatKidUpstairs.mp3",		  
          "cover_art_url": coverartDelineation,
          "uid":12
        },
		{
          "name": "And Also With You",
          "artist": doWhileLoops,
          "album": titleDelineation,
          "url": urlRoot + "AndAlsoWithYou.mp3",		  
          "cover_art_url": coverartDelineation,
          "uid":13
        },
		{
          "name": "Land Ho",
          "artist": doWhileLoops,
          "album": titleDelineation,
          "url": urlRoot + "LandHo.mp3",		  
          "cover_art_url": coverartDelineation,
          "uid":14
        },
        {
          "name": "Bidwell...Can You Hear Me?",
          "artist": doWhileLoops,
          "album": titleIteration,
          "url": urlRoot + "Things_MasterExport.wav",
          "cover_art_url": coverartIteration,
          "uid":15,
          "isFirstTrack": true
        },
        {
          "name": "The Penultimate Insult",
          "artist": doWhileLoops,
          "album": titleIteration,
          "url": urlRoot + "ThePenultimate_MasterExport.wav",
          "cover_art_url": coverartIteration,
          "uid":16
        },
        {
          "name": "Falsely Accused Of Intent",
          "artist": doWhileLoops,
          "album": titleIteration,
          "url": urlRoot + "Intention_MasterExport.wav",
          "cover_art_url": coverartIteration,
          "uid":17
        },
        {
          "name": "The Best Part Of Waking Up (For Marley)",
          "artist": doWhileLoops,
          "album": titleIteration,
          "url": urlRoot + "GuitarPiece_MasterExport.wav",
          "cover_art_url": coverartIteration,
          "uid":18
        },
        {
          "name": "Implement",
          "artist": doWhileLoops,
          "album": titleIteration,
          "url": urlRoot + "Implement_MasterExport.wav",
          "cover_art_url": coverartIteration,
          "uid":19
        },
        {
          "name": "Bullish",
          "artist": doWhileLoops,
          "album": titleIteration,
          "url": urlRoot + "PrimeTime_MasterExport.wav",
          "cover_art_url": coverartIteration,
          "uid":20
        },
        {
          "name": "Garden Shed",
          "artist": doWhileLoops,
          "album": titleIteration,
          "url": urlRoot + "GardenShed_MasterExport.wav",
          "cover_art_url": coverartIteration,
          "uid":21
        },
        {
          "name": "Big Wall's Coming Down",
          "artist": doWhileLoops,
          "album": titleIteration,
          "url": urlRoot + "BigWall_MasterExport.wav",
          "cover_art_url": coverartIteration,
          "uid":22
        },
        {
          "name": "Three Sets Of Five Across",
          "artist": doWhileLoops,
          "album": titleIteration,
          "url": urlRoot + "FlipYou_MasterExport.wav",
          "cover_art_url": coverartIteration,
          "uid":23
        }
        
        
      ];

export default {
    name: 'Home',
    data: function () {
        return {        
        songs: songs,
        fullsize: true,
        responsive: false,
        tinyresponsive: false,
        }
    },
    methods: {
      onResponsiveInverted () {
             if (window.innerWidth < 991) {
              this.responsive = true

              if(window.innerWidth < 551){
                  this.fullsize = false;
                  this.tinyresponsive = true;
              }
              else
                this.tinyresponsive = false;
                this.fullsize = false;
            } else {
              this.fullsize = true;
              this.responsive = false
              this.tinyresponsive = false;
            }
        }
    },
    beforeDestroy () {
    window.removeEventListener('resize', this.onResponsiveInverted)
    },
    mounted () {
            
            this.onResponsiveInverted()
            
            window.addEventListener('resize', this.onResponsiveInverted)
            
            //Shows the playlist
            document.getElementsByClassName('show-playlist')[0].addEventListener('click', function() {
                document.getElementById('white-player-playlist-container').classList.remove('slide-out-top');
                document.getElementById('white-player-playlist-container').classList.add('slide-in-top');
                document.getElementById('white-player-playlist-container').style.display = "inline-block";
            });
            //Hides the playlist
            document.getElementsByClassName('close-playlist')[0].addEventListener('click', function() {
                document.getElementById('white-player-playlist-container').classList.remove('slide-in-top');
                document.getElementById('white-player-playlist-container').classList.add('slide-out-top');
                document.getElementById('white-player-playlist-container').style.display = "none";
            });

            document.getElementById('song-played-progress').addEventListener('click', function( e ){
              var offset = this.getBoundingClientRect();
              var x = e.pageX - offset.left;
              Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
            });

            var json = {
            "songs": [
                {
                "name": "First Snow",
                "artist": "Emancipator",
                "album": "Soon It Will Be Cold Enough",
                "url": "https://521dimensions.com/song/FirstSnow-Emancipator.mp3",
                "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/soon-it-will-be-cold-enough.jpg"
                }
            ],
            "playlists": {
                "dwlTunes": {
                songs: songs
                }
            }
            };
        Amplitude.init(json);
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
  .example-container{
      background-color: #000000 !important;
  }

//******************AMPLITUDE***************** */

HTML CSS JSResult Skip Results Iframe
EDIT ON
/*
  1. Base
*/
/*
  2. Components
*/
/*
  White Player
*/
div#white-player {
  width: 100%;
  max-width: 375px;
  background-color: #000000;
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  font-family: "Lato", sans-serif;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  position: relative; }

div.white-player-top {
  height: 48px;
  display: flex;
  width: 100%;
  align-items: center; 
  text-align: right;
  padding-right:25px;
  padding-top:10px;
  //justify-content: right;
}
div.white-player-top div {
  flex: 1; 
}
div.white-player-top div.center {
  text-align: center; 
}
div.white-player-top span.now-playing {
  color: #414344;
  font-family: "Lato", sans-serif;
  line-height: 64px;
  font-weight: 600; 
}
div.white-player-top img.show-playlist {
  float: right;
  cursor: pointer;
  margin-right: 10px; 
}
div#white-player-center img.main-album-art {
  display: block;
  margin: auto;
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.12);
}
.main-album-art-fullsize {
  margin-top: 16px;
  margin-bottom: 50px;
  border-radius: 8px;
  width: 425px;
  height: 425px; 
}
.main-album-art-responsive {
  margin-top: 16px;
  margin-bottom: 50px;
  border-radius: 8px;
  width: 400px;
  height: 400px; 
}
.main-album-art-tinyresponsive {
  margin-top: 16px;
  margin-bottom: 25px;
  border-radius: 8px;
  width: 275px;
  height: 275px; 
}
div#white-player-center div.song-meta-data span.song-name {
  color: #ffffff;
  display: block;
  text-align: center;
  font-family: 'Inconsolata';
}
div#white-player-center div.song-meta-data span.song-name-fullsize {
  font-size: 36px;
  margin-top: 25px;
  margin-bottom: 25px;
}
div#white-player-center div.song-meta-data span.song-name-responsive {
  font-size: 32px;
  margin-top: 12px;
  margin-bottom: 12px;
}
div#white-player-center div.song-meta-data span.song-name-tinyresponsive {
  font-size: 24px;
  margin-top: 10px;
  margin-bottom: 10px;
}
div#white-player-center div.song-meta-data span.song-artist {
  color: #AAAFB3;
  display: block;
  text-align: center;
  font-size: 14px; 
}
div#white-player-center div.time-progress {
margin-bottom: 12px; 
}
div#white-player-center div.time-progress span.current-time {
color: #AAAFB3;
font-size: 12px;
display: block;
float: left;
margin-left: 20px; 
}
div#white-player-center div.time-progress div#progress-container {
margin-left: 20px;
margin-right: 20px;
position: relative;
height: 20px;
cursor: pointer;
/*
  IE 11
*/ }
div#white-player-center div.time-progress div#progress-container:hover input[type=range].amplitude-song-slider::-webkit-slider-thumb {
  display: block; }
div#white-player-center div.time-progress div#progress-container:hover input[type=range].amplitude-song-slider::-moz-range-thumb {
  visibility: visible; }
div#white-player-center div.time-progress div#progress-container progress#song-played-progress {
  width: 100%;
  position: absolute;
  left: 0;
  top: 8px;
  right: 0;
  width: 100%;
  z-index: 60;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  height: 4px;
  border-radius: 5px;
  background: transparent;
  border: none;
  /* Needed for Firefox */ }
@media all and (-ms-high-contrast: none) {
  div#white-player-center div.time-progress div#progress-container *::-ms-backdrop, div#white-player-center div.time-progress div#progress-container progress#song-played-progress {
    color: #FA6733;
    border: none;
    background-color: #E1E1E1; } }
@supports (-ms-ime-align: auto) {
  div#white-player-center div.time-progress div#progress-container progress#song-played-progress {
    color: #FA6733;
    border: none; } }
div#white-player-center div.time-progress div#progress-container progress#song-played-progress[value]::-webkit-progress-bar {
  background: none;
  border-radius: 5px; }
div#white-player-center div.time-progress div#progress-container progress#song-played-progress[value]::-webkit-progress-value {
  background-color: #FA6733;
  border-radius: 5px; }
div#white-player-center div.time-progress div#progress-container progress#song-played-progress::-moz-progress-bar {
  background: none;
  border-radius: 5px;
  background-color: #FA6733;
  height: 5px;
  margin-top: -2px; }
div#white-player-center div.time-progress div#progress-container progress#song-buffered-progress {
  position: absolute;
  left: 0;
  top: 8px;
  right: 0;
  width: 100%;
  z-index: 10;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  height: 4px;
  border-radius: 5px;
  background: transparent;
  border: none;
  background-color: #D7DEE3; 
  }
div#white-player-center div.time-progress div#progress-container progress#song-buffered-progress[value]::-webkit-progress-bar {
  background-color: #E1E1E1;
  border-radius: 5px; 
  }
div#white-player-center div.time-progress div#progress-container progress#song-buffered-progress[value]::-webkit-progress-value {
  background-color: #E1E1E1;
  border-radius: 5px;
  transition: width .1s ease; 
  }
div#white-player-center div.time-progress div#progress-container progress#song-buffered-progress::-moz-progress-bar {
  background: none;
  border-radius: 5px;
  background-color: #E1E1E1;
  height: 5px;
  margin-top: -2px; 
  }
div#white-player-center div.time-progress div#progress-container progress::-ms-fill {
  border: none; }
@-moz-document url-prefix() {
  div#white-player-center div.time-progress div#progress-container progress#song-buffered-progress {
    top: 9px;
    border: none; } 
}
@media all and (-ms-high-contrast: none) {
  div#white-player-center div.time-progress div#progress-container *::-ms-backdrop, div#white-player-center div.time-progress div#progress-container progress#song-buffered-progress {
    color: #78909C;
    border: none; 
    } 
  }
@supports (-ms-ime-align: auto) {
  div#white-player-center div.time-progress div#progress-container progress#song-buffered-progress {
    color: #78909C;
    border: none; 
    } 
  }
div#white-player-center div.time-progress div#progress-container input[type=range] {
  -webkit-appearance: none;
  width: 100%;
  margin: 7.5px 0;
  position: absolute;
  z-index: 9999;
  top: -7px;
  height: 20px;
  cursor: pointer;
  background-color: inherit; 
  }
div#white-player-center div.time-progress div#progress-container input[type=range]:focus {
  outline: none; 
  }
div#white-player-center div.time-progress div#progress-container input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 0px;
  cursor: pointer;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
  background: #FA6733;
  border-radius: 0px;
  border: 0px solid #010101; 
  }
div#white-player-center div.time-progress div#progress-container input[type=range]::-webkit-slider-thumb {
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  border: 1px solid #FA6733;
  height: 15px;
  width: 15px;
  border-radius: 16px;
  background: #FA6733;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -7.5px; 
}
div#white-player-center div.time-progress div#progress-container input[type=range]:focus::-webkit-slider-runnable-track {
  background: #FA6733; 
}
div#white-player-center div.time-progress div#progress-container input[type=range]::-moz-range-track {
  width: 100%;
  height: 0px;
  cursor: pointer;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
  background: #FA6733;
  border-radius: 0px;
  border: 0px solid #010101; 
}
div#white-player-center div.time-progress div#progress-container input[type=range]::-moz-range-thumb {
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  border: 1px solid #FA6733;
  height: 15px;
  width: 15px;
  border-radius: 16px;
  background: #FA6733;
  cursor: pointer; 
}
div#white-player-center div.time-progress div#progress-container input[type=range]::-ms-track {
  width: 100%;
  height: 0px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent; 
}
div#white-player-center div.time-progress div#progress-container input[type=range]::-ms-fill-lower {
  background: #003d57;
  border: 0px solid #010101;
  border-radius: 0px;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0); 
}
div#white-player-center div.time-progress div#progress-container input[type=range]::-ms-fill-upper {
  background: #FA6733;
  border: 0px solid #010101;
  border-radius: 0px;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0); 
}
div#white-player-center div.time-progress div#progress-container input[type=range]::-ms-thumb {
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  border: 1px solid #FA6733;
  height: 15px;
  width: 15px;
  border-radius: 16px;
  background: #FA6733;
  cursor: pointer;
  height: 0px;
  display: none; 
}
@media all and (-ms-high-contrast: none) {
  div#white-player-center div.time-progress div#progress-container *::-ms-backdrop, div#white-player-center div.time-progress div#progress-container input[type="range"].amplitude-song-slider {
    padding: 0px; 
    }
  div#white-player-center div.time-progress div#progress-container *::-ms-backdrop, div#white-player-center div.time-progress div#progress-container input[type=range].amplitude-song-slider::-ms-thumb {
    height: 15px;
    width: 15px;
    border-radius: 10px;
    cursor: pointer;
    margin-top: -8px; 
    }
  div#white-player-center div.time-progress div#progress-container *::-ms-backdrop, div#white-player-center div.time-progress div#progress-container input[type=range].amplitude-song-slider::-ms-track {
    border-width: 15px 0;
    border-color: transparent; 
    }
  div#white-player-center div.time-progress div#progress-container *::-ms-backdrop, div#white-player-center div.time-progress div#progress-container input[type=range].amplitude-song-slider::-ms-fill-lower {
    background: #E1E1E1;
    border-radius: 10px; 
    }
  div#white-player-center div.time-progress div#progress-container *::-ms-backdrop, div#white-player-center div.time-progress div#progress-container input[type=range].amplitude-song-slider::-ms-fill-upper {
    background: #E1E1E1;
    border-radius: 10px; 
    } 
  }
@supports (-ms-ime-align: auto) {
  div#white-player-center div.time-progress div#progress-container input[type=range].amplitude-song-slider::-ms-thumb {
    height: 15px;
    width: 15px;
    margin-top: 3px; 
    } 
  }
div#white-player-center div.time-progress div#progress-container input[type=range]:focus::-ms-fill-lower {
  background: #FA6733; 
  }
div#white-player-center div.time-progress div#progress-container input[type=range]:focus::-ms-fill-upper {
  background: #FA6733; 
  }
div#white-player-center div.time-progress span.duration {
  color: #AAAFB3;
  font-size: 12px;
  display: block;
  float: right;
  margin-right: 20px; 
}
div#white-player-controls {
  text-align: center;
}
div#white-player-controls div#previous {
  display: inline-block;
  cursor: pointer;
  background-size: 100% !important; 
  background: url("../../assets/SkipBackwardButton.svg"); 
  vertical-align: middle;
}
div#white-player-controls div#play-pause {
  display: inline-block;
  cursor: pointer;
  vertical-align: middle;
}
div#white-player-controls div#next {
  display: inline-block;
  cursor: pointer;
  background-size: 100% !important; 
  background: url("../../assets/SkipForwardButton.svg"); 
  vertical-align: middle;
}
  div#white-player-controls div#shuffle {
  display: inline-block;
  background-size: 100% !important; 
  cursor: pointer;
  vertical-align: middle;
}
div#white-player-controls div#repeat {
  display: inline-block;
  background-size: 100% !important; 
  cursor: pointer;
  vertical-align: middle;
}
div#white-player-controls div#play-pause.amplitude-paused {
  background: url("../../assets/PlayButton.svg"); 
  background-size: 100%;
}
div#white-player-controls div#play-pause.amplitude-playing {
  background: url("../../assets/PauseButton.svg"); 
  background-size: 100%;
}
div#white-player-controls div#repeat.amplitude-repeat-off {
  background: url("../../assets/RepeatOff.svg"); 
}
div#white-player-controls div#repeat.amplitude-repeat-on {
  background: url("../../assets/RepeatOn.svg"); 
}
div#white-player-controls div#shuffle.amplitude-shuffle-off {
  background: url("../../assets/ShuffleOff.svg"); 
}
div#white-player-controls div#shuffle.amplitude-shuffle-on {
  background: url("../../assets/ShuffleOn.svg"); 
}
.amplitude-shuffle-fullsize, .amplitude-repeat-fullsize {
	  width: 32px;
    height: 32px;
}			
.amplitude-shuffle-responsive, .amplitude-repeat-responsive {
    width: 26px;
    height: 26px;
}			
.amplitude-shuffle-tinyresponsive, .amplitude-repeat-tinyresponsive {
	  width: 20px;
    height: 20px;
}
.amplitude-prev-fullsize, .amplitude-next-fullsize{
	  height: 60px;
    width: 60px;
    margin: 0 32px;
}
.amplitude-prev-responsive, .amplitude-next-responsive{
	  height: 48px;
    width: 48px;
    margin: 0 24px;
}
.amplitude-prev-tinyresponsive, .amplitude-next-tinyresponsive{
	width: 24px;
  height: 24px;
  margin: 0 12px;
}
.amplitude-play-pause-fullsize{
	width: 100px;
  height: 100px;
}
.amplitude-play-pause-responsive {
	width: 80px;
  height: 80px;
}
.amplitude-play-pause-tinyresponsive{
	width: 48px;
    height: 48px;
}
div#white-player-playlist-container {
  position: absolute;
  color:#fff;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  z-index: 9999;
  display: none;
  border-radius: 8px; 
}
.playlist-container-fullsize{
  left: 40%;
}
.playlist-container-responsive, .playlist-container-tinyresponsive{
  left: 0;
}
div.white-player-playlist-top {
  height: 32px;
  text-align: right;
  padding-right:25px;
  padding-top:15px;
  display: flex; 
}
div.white-player-playlist-top div {
  flex: 1; 
}
div.white-player-playlist-top div span.queue {
  color: #414344;
  font-family: "Lato", sans-serif;
  line-height: 64px;
  font-weight: 600; 
}
div.white-player-playlist-top div img.close-playlist {
  margin-right: 16px;
  margin-top: 22px;
  float: right;
  cursor: pointer; 
}
div.white-player-up-next {
  margin-top: 6px;
  padding-left: 20px;
  font-size: 24px;
  color: #414344; 
}
div.white-player-playlist {
  margin-top: 32px;
  height: 85%;
  overflow-y: scroll; 
}
div.white-player-playlist-song {
  //border-bottom: 1px solid #F5F5F6;
  padding-top: 8px;
  padding-bottom: 8px;
  cursor: pointer; 
}
div.white-player-playlist-song:hover {
  background-color: #000;
}
div.white-player-playlist-song.amplitude-active-song-container {
  background-color: #000; 
}
div.white-player-playlist-song img {
  width: 60px;
  height: 60px;
  border-radius: 3px;
  margin-left: 16px;
  float: left; 
}
div.white-player-playlist-song div.playlist-song-meta {
  float: left;
  margin-left: 15px;
  width: calc( 100% - 80px ); 
  font-family: 'Inconsolata';
  color: #fff;
}
div.white-player-playlist-song div.playlist-song-meta span.playlist-song-name {
  font-size: 18px;
  display: block;
  width: 100%;
  //white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; 
}
div.white-player-playlist-song div.playlist-song-meta span.playlist-artist-album {
  font-size: 16px;
  display: block;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; 
  font-family: 'Inconsolata' !important;
  color: #fff;
}
.playlist-artist-album{
  font-size: 24px;
  font-family: 'Inconsolata' !important;
  color: #fff;
  text-decoration: underline;
}
.white-player-albumart-container{
  text-align:center;
}
div.white-player-playlist-song::after {
  content: "";
  display: table;
  clear: both; 
}
div.white-player-playlist-controls {
  background-color: #F5F5F6;
  border-radius: 8px;
  padding: 16px; 
}
div.white-player-playlist-controls img.playlist-album-art {
  float: left;
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  height: 64px;
  width: 64px; 
}
div.white-player-playlist-controls div.playlist-controls {
  float: left;
  margin-left: 25px;
  width: calc( 100% - 89px ); 
}
div.white-player-playlist-controls div.playlist-controls div.playlist-meta-data {
  display: inline-block;
  width: calc(100% - 125px);
  vertical-align: middle; 
}
div.white-player-playlist-controls div.playlist-controls div.playlist-meta-data span.song-name {
  display: block;
  color: #414344;
  font-size: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; 
}
div.white-player-playlist-controls div.playlist-controls div.playlist-meta-data span.song-artist {
  display: block;
  color: #AAAFB3;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; 
}
div.white-player-playlist-controls div.playlist-controls div.playlist-control-wrapper {
  text-align: center;
  margin-top: 10px;
  display: inline-block;
  width: 120px;
  vertical-align: middle; 
}
div.white-player-playlist-controls div.playlist-controls div.playlist-control-wrapper div#playlist-previous {
  display: inline-block;
  cursor: pointer;
  background-size: 100%; 
  background: url("../../assets/SkipBackwardButton.svg"); 
  vertical-align: middle;
}
div.white-player-playlist-controls div.playlist-controls div.playlist-control-wrapper div#playlist-play-pause {
  display: inline-block;
  width: 32px;
  height: 32px;
  cursor: pointer;
  vertical-align: middle; 
}
div.white-player-playlist-controls div.playlist-controls div.playlist-control-wrapper div#playlist-play-pause.amplitude-paused {
  background-size: 100%; 
  background: url("../../assets/PlayButton.svg"); 
}
div.white-player-playlist-controls div.playlist-controls div.playlist-control-wrapper div#playlist-play-pause.amplitude-playing {
  background-size: 100%; 
  background: url("../../assets/PauseButton.svg"); 
}
div.white-player-playlist-controls div.playlist-controls div.playlist-control-wrapper div#playlist-next {
  display: inline-block;
  height: 32px;
  width: 32px;
  cursor: pointer;
  background: url("https://521dimensions.com/img/open-source/amplitudejs/examples/multiple-playlists/next.svg");
  vertical-align: middle;
  background-size: 32px 32px; 
}
div.white-player-playlist-controls::after {
  content: "";
  display: table;
  clear: both; 
}
.playlist-toggle-button{
    cursor: pointer;
}
/*
  3. Layout
*/
body {
  height: 100vh;
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#1e5799+0,2989d8+50,7db9e8+100 */
  background: #1e5799;
  /* Old browsers */
  background: -moz-linear-gradient(-45deg, #1e5799 0%, #2989d8 50%, #7db9e8 100%);
  /* FF3.6-15 */
  background: -webkit-linear-gradient(-45deg, #1e5799 0%, #2989d8 50%, #7db9e8 100%);
  /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(135deg, #1e5799 0%, #2989d8 50%, #7db9e8 100%);
  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e5799', endColorstr='#7db9e8',GradientType=1 );
  /* IE6-9 fallback on horizontal gradient */
  -webkit-font-smoothing: antialiased;
  font-family: "Helvetica Neue",Helvetica,Roboto,Arial,sans-serif;
  line-height: 1.5; }
  body div.example-container {
    width: 100%;
    display: flex; 
  }
  body div.example-container div.left {
    width: 100%; 
  }
  body div.example-container div.right {
    width: 50%;
    display: flex;
    flex-wrap: wrap; 
  }
  body span.playlist-title {
    display: block;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    font-size: 30px;
    color: white;
    font-weight: bold;
    font-family: "Lato", sans-serif;
    width: 100%; 
  }
@media screen and (max-width: 39.9375em) {
  body div.example-container {
    flex-direction: column; 
    }
    body div.example-container div.left {
      width: 100%; }
    body div.example-container div.right {
      width: 100%; } 
  }
@media screen and (min-width: 40em) and (max-width: 63.9375em) {
  body div.right {
    padding-left: 20px; } 
}
/*
  4. Pages
*/
/*
  5. Themes
*/
/*
  6. Utils
*/
/*
  7. Vendors
*/
/*
  8. Animations
*/



.slide-in-top {
  -webkit-animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both; }

/* ----------------------------------------------
 * Generated by Animista on 2019-3-25 18:39:54
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */
/**
 * ----------------------------------------
 * animation slide-in-top
 * ----------------------------------------
 */
@-webkit-keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
    opacity: 0; 
    }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1; 
    } 
  }
@keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
    opacity: 0; }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1; 
    } 
  }
.slide-out-top {
  -webkit-animation: slide-out-top 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  animation: slide-out-top 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both; 
  }

/* ----------------------------------------------
 * Generated by Animista on 2019-3-25 18:45:17
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */
/**
 * ----------------------------------------
 * animation slide-out-top
 * ----------------------------------------
 */
@-webkit-keyframes slide-out-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1; 
    }
  100% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
    opacity: 0; 
    } 
  }
@keyframes slide-out-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1; 
    }
  100% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
    opacity: 0; 
    } 
  }

/*# sourceMappingURL=app.css.map */

a.learn-more{
  display: block;
  text-decoration: none;
  background-color: white;
  width: 300px;
  border-radius: 3px;
  text-align: center;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 5px;
  color: rgba(211, 94, 154, 0.9);
}
</style>