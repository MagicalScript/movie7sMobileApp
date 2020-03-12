import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StreamingMedia, StreamingVideoOptions, StreamingAudioOptions } from '@ionic-native/streaming-media';

import { AdMobFree , AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { GlobalProvider } from '../../providers/global/global';
import { Subscription } from 'rxjs/Subscription';
/**
 * Generated class for the VideoPlayerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video-player',
  templateUrl: 'video-player.html',
})
export class VideoPlayerPage {

  data
  param
  sub:Subscription
  constructor(public global: GlobalProvider,private adMobFree: AdMobFree ,public navCtrl: NavController, public navParams: NavParams, private streamingMedia: StreamingMedia) {
    if(this.navParams.data.data) {
      this.data = this.navParams.data.data
      this.param = this.navParams.data.data
      this.data.backdrop_path = this.navParams.data.data.poster_path
      console.log(this.param)
      this.startVideoFilm(this.param)
    }

    console.log(GlobalProvider.isRaning())
    if(!GlobalProvider.isRaning()){
      this.showInterstitialAd();
      this.sub = Observable.interval(1000 )
      .subscribe((val) => { console.log('showInterstitialAd Called'); 
                            this.showInterstitialAd();
                            GlobalProvider.run();
                          if(!GlobalProvider.isRaning()){
                            this.sub.unsubscribe()
                          }
                          
                          
                          })
      
    }else{

    }


/*     timer = Observable.timer(initialDelay, period);
    
    timer.subscribe(tick => {
       // Your API call, which will be performed every period
    }); */
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoPlayerPage');
  }

  startVideo() {
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Finished Video') },
      errorCallback: (e) => { console.log('Error: ', e) },
      orientation: 'portrait'
    };
 
    // http://www.sample-videos.com/
    this.streamingMedia.playVideo('http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_30mb.mp4', options);
  }
  
  startVideoFilm(f) {
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Finished Video') },
      errorCallback: (e) => { console.log('Error: ', e) },
      orientation: 'portrait'
    };
 
    // http://www.sample-videos.com/
    this.streamingMedia.playVideo(f.url, options);
  }
 
  startAudio() {
    let options: StreamingAudioOptions = {
      successCallback: () => { console.log('Finished Audio') },
      errorCallback: (e) => { console.log('Error: ', e) },
      initFullscreen: false // iOS only!
    };
 
    //http://soundbible.com/2196-Baby-Music-Box.html
    this.streamingMedia.playAudio('http://soundbible.com/grab.php?id=2196&type=mp3', options);
  }
 
  stopAudio() {
    this.streamingMedia.stopAudio();
  }

  async showInterstitialAd() {
    try {
      const interstitialConfig: AdMobFreeInterstitialConfig = {
        id: 'ca-app-pub-3940256099942544/1033173712',
        isTesting: true,
        autoShow: true
      }

      this.adMobFree.interstitial.config(interstitialConfig);

      const result = await this.adMobFree.interstitial.prepare();
      console.log(result);
    }
    catch (e) {
      console.error(e)
    }
  }

}
