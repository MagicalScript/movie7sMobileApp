import { Component, ViewChild } from '@angular/core';
import { IonicPage, ToastController,  NavController, Content } from 'ionic-angular';
import { MoviesStorage } from '../../providers/storage/movies-storage'
import { MoviesApi } from "../../providers/api/movies-api";
import { MoviesApiProvider } from '../../providers/movies-api/movies-api'
import 'rxjs/add/operator/toPromise'
import { TmdbProvider } from '../../providers/tmdb/tmdb';
import { FavoriteProvider } from '../../providers/favorite/favorite';

declare var window;

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  @ViewChild(Content) content: Content;
  public contentWidth;
  private _pageNo: number = 0;
  private size = 342;
  items = [];
  public upcomingMovies = [];
  cannotLoadContent: boolean = true;

  constructor(private favoriteProvider: FavoriteProvider,private MoviesApi: MoviesApiProvider, private toastCtrl: ToastController, private navCtrl: NavController, private store: MoviesStorage, private tmdb: TmdbProvider) {
    this.loadTable()
  }
  //private _dbPromise: Promise<any>;
  loadTable(){
    return this.favoriteProvider.getAllFavoriteFilms().then((res) => {
      ////console.log(res)
      this._pageNo ++
      this.store.setLatest(res)
      this.upcomingMovies = res
      /* this.converter(res).then(res => {
        //this.upcomingMovies = res
      }) */
      console.log(this.upcomingMovies)
    })
  }
  converter(res):Promise<any>{
    return new Promise((resolve, reject) => {
      let data : any [] = []
      for(let r of res){
        let n = {
          fav : false,          
          tmdb : r.tmdb,
          created_at : r.created_at,
          season : r.season,
          seasonTmdb : r.seasonTmdb,
          num : r.num,
          tv : r.tv,
          type : r.type,
          poster : '',
          release_date:'',
          vote_average:'',
          first_air_date:'',
          title:'',
          name:'',
        }
        this.getTMDB(n).subscribe((res) => {
          n.poster =  res.poster_path 
          n.release_date = res.release_date
          n.vote_average = res.vote_average
          n.first_air_date = res.first_air_date
          n.title = res.title
          n.name = res.name
          ////console.log(res)
          ////console.log(n)
          data.push(n)
          this.upcomingMovies.push(n)
        })
        //data.push(this.getTMDB(n))
      }
      ////console.log(data)
      resolve(data)
    });
  }
  getTMDB(d){
    if(d.type == 'mov'){
      return this.tmdb.getMovie(d.tmdb)
    }
    else if (d.type == 'epi'){
      return this.tmdb.getTV(d.tv)
    }
  }
  goToDetailsPage(movie) {
    if(movie.type == 'mov'){
      this.navCtrl.push("MovieDetails", {id: movie.tmdb, data: movie, imgSize: this.size})
    }else{
      this.navCtrl.push("EpisodeDetailsPage", {id: movie.tmdb, data: movie})
    }
  }
  getOffline() {
    /* this.store.getLatest().then(res => {
      if (!res.results[0]) {
        this.presentToast("You are offline and there's nothing in the cache. Guess we'd just have to be looking at ourselves")
      } else {
        this.presentToast("You are currently offline, serving you cached content")
        this.upcomingMovies = res.results
      }
    }) */
  }
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 5000,
      position: "bottom"
    })
    toast.present()
  }
  doInfinite(e) {
    //console.log('Begin async operation');
    return this.loadTable().then(res => {
      e.complete()
    }).catch(err => {
      //this.presentToast("Can't fetch you more movies. There seems to be something wrong with the network 😥📵")
    })
  }
  search() {
    this.navCtrl.push("Search")
  }
 
  ionViewDidLoad() {
    // this.slides.slideTo(this.slideIndex || 0)
    let width = this.content.getContentDimensions().contentWidth;
    if ( width >= 530) {
      //console.log("Tablet")
      this.size = 500
    }
  }

  favoriteFilm(f) {
    this.favoriteProvider.favoriteFilm(f).then(() => {
      f.fav = true;
    });
  }
 
  unfavoriteFilm(f) {
    this.favoriteProvider.unfavoriteFilm(f).then(() => {
      f.fav = false;
      this.loadTable()
    });
  }


}
