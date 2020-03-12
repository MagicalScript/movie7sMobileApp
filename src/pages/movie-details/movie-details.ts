import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoviesStorage } from "../../providers/storage/movies-storage";
import { MoviesApi } from "../../providers/api/movies-api";
import { MovieGenres } from "../../providers/data/genres";
import { MoviesApiProvider } from '../../providers/movies-api/movies-api';
import { TmdbProvider } from '../../providers/tmdb/tmdb';
import { FavoriteProvider } from '../../providers/favorite/favorite';
import { StreamingVideoOptions, StreamingMedia } from '@ionic-native/streaming-media';
import { GlobalProvider } from '../../providers/global/global';
import { AdMobFreeInterstitialConfig, AdMobFree } from '@ionic-native/admob-free';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { EventLoggerProvider } from '../../providers/event-logger/event-logger';
import { AuthProvider } from '../../providers/auth/auth';

interface movie {
  "poster_path"?: string,
  "adult"?: false,
  "overview"?: string,
  "release_date"?: string,
  "genre_ids"?: number[],
  "id"?: number,
  "original_title"?: string,
  "original_language"?: string,
  "title"?: string,
  "backdrop_path"?: string,
  "popularity"?: number,
  "vote_count"?: number,
  "video"?: boolean
  "vote_average"?: number
}
@IonicPage({
  segment: "movies/:id",
  defaultHistory: ['Movies']
})
@Component({
  selector: 'page-movie-details',
  templateUrl: 'movie-details.html',
})
export class MovieDetails {
  public data: any = {}
  public movieDetail = 'info'
  private _genres = MovieGenres
  private shouldPlayTrailer: boolean = false
  private movieUrl: SafeResourceUrl
  private iconName: string = 'play';
  private param
  cate
  info
  sub: Subscription
  reviews : any [] = []
  logged = false
  mcommment = ''
  constructor(private user: AuthProvider,private streamingMedia: StreamingMedia, private adMobFree: AdMobFree, private favoriteProvider: FavoriteProvider, private _tmdb: TmdbProvider, private MovApi: MoviesApiProvider, public navCtrl: NavController, private sanitizer: DomSanitizer, public navParams: NavParams, private _store: MoviesStorage, private _api: MoviesApi) {
    this.logged = user.loggedIn()
    EventLoggerProvider.logButton('startApp',{ pram: "paramValue" })
    if (this.navParams.data.data) {
      this.data = this.navParams.data.data
      this.param = this.navParams.data.data
      this.data.backdrop_path = this.navParams.data.data.poster_path
    }

    this.loadcomment()
    this._tmdb.getMovie(this.navParams.data.id).subscribe(res => {
      this.info = res;
      this.MovApi.getinfo(this.param.tmdb).subscribe((_res) => {
        console.log(_res)
        if (!this.isEmptyObject(_res)) {
          this.info.overview = _res[0]['overview']
          this.data.title = _res[0]['name']
          this.cate = _res[0]['ncate']
        }
      })
      console.log(this.data)
    });
    this._api.one(this.navParams.data.id).subscribe(res => {
      this.data = res;
      console.log(res)
      if (!res.backdrop_path) {
        this.data.backdrop_path = res.poster_path
      }
      this.movieUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + res.videos.results[0].key)
    });

    this.getServer(this.param)
  }

  _Commentpage = 0
  loadcomment(){
    console.log('..............loadcomment....................')
    return this.MovApi.getCommentTmdb(this.param.tmdb,this._Commentpage).toPromise().then((res)=>{
      //this.reviews.push(res)
      this.converter(res)
      console.log(res)
      this._Commentpage ++
    })
  }
converter(res){
  for(let r of res){
    this.reviews.push(r)
  }
}

  serverList
  selectedFilm
  getServer(f) {
    console.log('-------------- Film ---------------')
    this.MovApi.getLinksbyTmdbPage(f.tmdb, 0).subscribe((res) => {
      this.serverList = res
      console.log(res)
    })
  }
  isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }
  getGenre(id) {
    this._genres.find(genre => {
      return genre.id === id
    })
  }
  toggleTrailer() {
    this.shouldPlayTrailer = !this.shouldPlayTrailer
    this.iconName = this.shouldPlayTrailer ? "close" : "play";
  }
  navActor(actor) {
    this.navCtrl.push("ActorDetails", { data: actor, id: actor.id })
  }
  navMovie(movie) {
    this.navCtrl.push("MovieDetails", { data: movie, id: movie.id })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieDetails');
  }
  ionViewWillEnter() {
  }
  playTrailer() {
    console.log("Will play ", this.data.videos.results[0].key)
  }
  save() {
    //add ability to save film for viewing later
  }

  favoriteFilm(f) {
    console.log('favoriteFilm')
    f.fav = true;
    this.favoriteProvider.favoriteFilm(f).then(() => {
    });
  }

  unfavoriteFilm(f) {
    console.log('unfavoriteFilm')
    f.fav = false;
    this.favoriteProvider.unfavoriteFilm(f).then(() => {
    });
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

  played = false
  GoToplayer() {
    /*     console.log('GoToplayer')
        console.log(this.selectedFilm)
        this.navCtrl.push("VideoPlayerPage", {data: this.selectedFilm})    
     */
    this.played = true
    this.startVideoFilm(this.selectedFilm)
    console.log(GlobalProvider.isRaning())
    if (GlobalProvider.isRaning()) {
      this.showInterstitialAd();
/*       this.sub = Observable.interval(1000 * 60 * 10)
        .subscribe((val) => {
          console.log('showInterstitialAd Called');
          this.showInterstitialAd();
          GlobalProvider.run();
          if (!GlobalProvider.isRaning()) {
            this.sub.unsubscribe()
          }


        }) */

    } else {

    }
  }

  async showInterstitialAd() {
    try {
      const interstitialConfig: AdMobFreeInterstitialConfig = {
        id: 'ca-app-pub-1277041454248274/3424069498',
        isTesting: false,
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

  ngOnDestroy() {
    try {
      if (GlobalProvider.isRaning() && this.played) {
        this.showInterstitialAd();
  /*       this.sub = Observable.interval(1000 * 60 * 10)
          .subscribe((val) => {
            console.log('showInterstitialAd Called');
            this.showInterstitialAd();
            GlobalProvider.run();
            if (!GlobalProvider.isRaning()) {
              this.sub.unsubscribe()
            }
  
  
          }) */
  
      } else {
  
      }
    //this.sub.unsubscribe();
    } catch (error) {
      
    }
  }
/*   sendComment(_comment){
    let comment = {
      comment : _comment,
      user : this.user.getUserId(),
      tmdb : this.param.tmdb,
    }
    console.log(comment)
    this.MovApi.addCommentTmdb(comment).subscribe((res)=>{
      this.loadcomment()
      
    })
  } */
  sendComment(_comment){
    if(_comment!=''){
      let comment = {
        comment : _comment,
        user : this.user.getUserId(),
        tmdb : this.param.tmdb
      }
      console.log(comment)
      return this.MovApi.addCommentTmdb(comment).subscribe(()=>{
        this.reviews.unshift({comment : _comment , name : this.user.getCurrentUser().name})
        console.log('add coment')
        this.loadcomment()
      })
    }
  }
  doInfinite(e) {
    console.log('..............loadcomment....................')
    
    return this.loadcomment()
  
}
}
