import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SeriesApi } from "../../providers/api/series-api";
import { SeriesStorage } from "../../providers/storage/series-storage";
import { MovieGenres } from "../../providers/data/genres";
import { MoviesApiProvider } from '../../providers/movies-api/movies-api';
import { TmdbProvider } from '../../providers/tmdb/tmdb';
import { FavoriteProvider } from '../../providers/favorite/favorite';
import { GlobalProvider } from '../../providers/global/global';
import { AdMobFreeInterstitialConfig, AdMobFree } from '@ionic-native/admob-free';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { StreamingVideoOptions, StreamingMedia } from '@ionic-native/streaming-media';
import { EventLoggerProvider } from '../../providers/event-logger/event-logger';
import { AuthProvider } from '../../providers/auth/auth';


@IonicPage()
@Component({
  selector: 'page-episode-details',
  templateUrl: 'episode-details.html',
})
export class EpisodeDetailsPage {
  private iconName: string = 'play';

  cate
  public data;
  private param;
  sub: Subscription
  public episodeDetail = "info";
  _seasons: any[] = []
  _episodes: any[] = []
  private _genres = MovieGenres;
  constructor(private user: AuthProvider, private streamingMedia: StreamingMedia, private adMobFree: AdMobFree, private favoriteProvider: FavoriteProvider, public navCtrl: NavController, public navParams: NavParams, private _api: TmdbProvider, private MovApi: MoviesApiProvider, private _storage: SeriesStorage) {
    this.logged = user.loggedIn()

    EventLoggerProvider.logButton('startApp', { pram: "paramValue" })
    if (this.navParams.data.data) {
      this.param = this.navParams.data.data
      console.log(this.param)
      this.getSeasonPoster()
      this.load()
    }
    if (this.param.type == 'season') {
      console.log('as -------------------- Season')
      this.data = this.param
      this.__tmdb = this.param.seasonTmdb

    } else {
      console.log('as -------------------- Episode')
      this._api.getEpisode(this.param.tv, this.param.season, this.param.num).subscribe(res => {
        this.data = res;
        console.log(this.data)
        this.MovApi.getinfo(this.param.tmdb).subscribe((_res) => {
          console.log(_res)
          if (!this.isEmptyObject(_res)) {
            this.data.overview = (_res[0]['overview'] != '' ? _res[0]['overview'] : this.data.overview)
            this.data.name = _res[0]['name']
            this.cate = _res[0]['ncate']
            console.log(_res)
          }
        })
      });
      this.getServer(this.param)
      this.__tmdb = this.param.tmdb

    }
    this.loadcomment()
  }
  isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }
  getGenre(id) {
    this._genres.find(genre => {
      return genre.id === id
    })
  }
  navActor(actor) {
    this.navCtrl.push("ActorDetails", { data: actor, id: actor.id })
  }
  navSerie(serie) {
    this.navCtrl.push("SerieDetails", { data: serie, id: serie.id })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SeriesDetails');
  }
  load() {
    this.MovApi.getEpiBySeaPage(this.param.seasonTmdb, 0).subscribe((res) => {
      this.converterEpi(res).then((res) => { })
    })
    this.MovApi.getSeasonByTvPage(this.param.tv, 0).subscribe((res) => {
      this.converterSeason(res).then((res) => { })
    })
  }

  converterEpi(res): Promise<any> {
    /*     return new Promise((resolve, reject) => {
          //console.log(res)
          let data : any [] = []
          for(let r of res){
            this._api.getEpisode(this.param.tv,this.param.season,r.num).subscribe((res) => {
              console.log('___________EPI_______________')
              console.log(res)
              //console.log(n)
              data.push(res)
              this._episodes.push(res)
            })
            //data.push(this.getTMDB(n))
          }
          console.log(data)
          resolve(data)
        }); */

    return new Promise((resolve, reject) => {
      let data: any[] = []
      for (let r of res) {
        let n = {
          fav: false,
          tmdb: r.tmdb,
          created_at: r.created_at,
          season: r.seasonNum,
          seasonTmdb: r.season,
          num: r.num,
          tv: r.tv,
          type: r.type,
          poster: '',
          release_date: '',
          vote_average: '',
          first_air_date: '',
          title: '',
          name: '',
        }
        this._api.getEpisode(this.param.tv, this.param.season, r.num).subscribe((res) => {
          n.poster = res.still_path
          n.release_date = res.release_date
          n.vote_average = res.vote_average
          n.first_air_date = res.first_air_date
          n.title = res.title
          n.name = res.name
          console.log()
          console.log(res)
          console.log(n)
          data.push(n)
          this._episodes.push(n)
        })
        //data.push(this.getTMDB(n))
      }
      ////console.log(data)
      resolve(data)
    });
  }
  converterSeason(res): Promise<any> {
    /* return new Promise((resolve, reject) => {
      console.log(res)
      let data : any [] = []
      for(let r of res){
        this._api.getSeason(this.param.tv,r.num).subscribe((res) => {
          console.log(res)
          //console.log(n)
          data.push(res)
          this._seasons.push(res)
        })
        //data.push(this.getTMDB(n))
      }
      console.log(data)
      resolve(data)
    }); */

    return new Promise((resolve, reject) => {
      let data: any[] = []
      for (let r of res) {
        let n = {
          fav: false,
          tmdb: r.tmdb,
          created_at: r.created_at,
          season: r.num,
          seasonTmdb: r.tmdb,
          num: r.num,
          tv: r.tv,
          type: r.type,
          poster: '',
          release_date: '',
          vote_average: '',
          first_air_date: '',
          title: '',
          name: '',
          Epi: r.Epi,
        }
        this._api.getSeason(this.param.tv, r.num).subscribe((res) => {
          n.poster = res.poster_path
          n.release_date = res.release_date
          n.vote_average = res.vote_average
          n.first_air_date = res.air_date
          n.title = res.title
          n.name = res.name
          console.log('----------------------------------------')
          console.log(res)
          console.log(n)
          console.log('----------------------------------------')
          data.push(n)
          this._seasons.push(n)
        })
        //data.push(this.getTMDB(n))
      }
      console.log(data)
      console.log('converter---------------------------------------')
      resolve(data)
    });
  }

  GoToEpisode(movie) {
    console.log('____________________________Goto______')
    console.log(movie)
    this.navCtrl.push("EpisodeDetailsPage", { id: movie.tmdb, data: movie })
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

  serverList
  selectedFilm
  getServer(f) {
    console.log('-------------- Film ---------------')
    this.MovApi.getLinksbyTmdbPage(f.tmdb, 0).subscribe((res) => {
      this.serverList = res
      console.log(res)
    })
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
        id: 'ca-app-pub-8923677418758949/5514110743',
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
  startVideoFilm(f) {
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Finished Video') },
      errorCallback: (e) => { console.log('Error: ', e) },
      orientation: 'portrait'
    };

    // http://www.sample-videos.com/
    this.streamingMedia.playVideo(f.url, options);
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

  reviews: any[] = []
  logged = false
  mcommment = ''

  __tmdb
  _Commentpage = 0
  loadcomment() {
    console.log('..............loadcomment....................')
    return this.MovApi.getCommentTmdb(this.__tmdb, this._Commentpage).toPromise().then((res) => {
      //this.reviews.push(res)
      this.converter(res)
      console.log(res)
      this._Commentpage++
    })
  }
  converter(res) {
    for (let r of res) {
      this.reviews.push(r)
    }
  }






  sendComment(_comment) {
    if(_comment != ''){
      let comment = {
        comment: _comment,
        user: this.user.getUserId(),
        tmdb: this.param.tmdb
      }
      console.log(comment)
      return this.MovApi.addCommentTmdb(comment).subscribe(() => {
        this.reviews.unshift({ comment: _comment, name: this.user.getCurrentUser().name })
        console.log('add coment')
        this.loadcomment()
      })
    }
  }
  doInfinite(e) {
    console.log('..............loadcomment....................')

    return this.loadcomment();

  }

  mposter
  getSeasonPoster(){
    this._api.getSeason(this.param.tv,this.param.season).subscribe((res)=>{
      this.mposter=res.poster_path
    })
  }


}
