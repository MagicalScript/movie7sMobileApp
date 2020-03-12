import { Component, ViewChild } from '@angular/core';
import { IonicPage, ToastController, NavController, Content, NavParams } from 'ionic-angular';
import { MoviesStorage } from '../../providers/storage/movies-storage'
import { MoviesApi } from "../../providers/api/movies-api";
import 'rxjs/add/operator/toPromise'
import { SeriesApi } from "../../providers/api/series-api";
import { TmdbProvider } from '../../providers/tmdb/tmdb';
import { MoviesApiProvider } from '../../providers/movies-api/movies-api';
import { FavoriteProvider } from '../../providers/favorite/favorite';

//todo refrech methode sparet
/**
 * Generated class for the MovihomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seriehome',
  templateUrl: 'seriehome.html',
})
export class SerieHomePage {



  @ViewChild(Content) content: Content;

  public topRated;
  public upcoming;
  public latest;
  public popular;
  pet: string = "a";
  
  public contentWidth;
  private _pageNo: number = 2;
  private size = 342;
  items = [];
  public upcomingMovies = [];
  cannotLoadContent: boolean = true;
  constructor(private favoriteProvider: FavoriteProvider,private _tmdb: TmdbProvider,private MovApi: MoviesApiProvider,private toastCtrl: ToastController, private navCtrl: NavController, private store: MoviesStorage,/*  private movies: MoviesApi, */ public api: SeriesApi) {
    this.loadFirst()
    /* this.movies.latest().subscribe(res => {
      //console.log(res)
      this.store.setLatest(res)
      this.upcomingMovies = res.results
    }, err => {
      this.getOffline()
    }) */
  }
  goToDetailsPage(movie) {
    this.navCtrl.push("EpisodeDetailsPage", {id: movie.tmdb, data: movie})
    
  }
  isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }
  getOffline() {
    this.store.getLatest().then(res => {
      if (!this.isEmptyObject(res)) {
        this.presentToast("أنت في وضع عدم الاتصال ولا يوجد أي شيء في ذاكرة التخزين المؤقت. أعتقد أنه علينا فقط أن ننظر إلى أنفسنا")
      } else {
        this.presentToast("أنت في وضع عدم الاتصال حاليًا ، مما يوفر لك المحتوى الذي تم تخزينه مؤقتًا")
        this.upcomingMovies = res.results
      }
    })
  }
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 5000,
      position: "bottom"
    })
    toast.present()
  }

  search() {
    this.navCtrl.push("Search")
  }

  ionViewDidLoad() {
    // this.slides.slideTo(this.slideIndex || 0)
    let width = this.content.getContentDimensions().contentWidth;
    if (width >= 530) {
      //console.log("Tablet")
      this.size = 500
    }
    //console.log('ionViewDidLoad Series');
    // this.getPopular();
    // this.getTopRated();
    // this.getLatest();
    this.getUpcoming();
  }
  getUpcoming() {
    this.api.upcoming(this._pageNo).subscribe(res => {
      this.upcoming = res.results;
      this._pageNo++
    }, err => {
      this.getOffline()
    });
  }
  ////////////////////////////////////////////////////////////////
  getMovieCategories() {
    //call api categories
    //data =>
  }

  getMovieByCategory(id, page) {
    //call api movies by cate and page
    //data =>    
  }
  getSerieCategories() {
    //call api categories for series arabic , foriegn ...
    //data =>
  }

  getSerieByCategory(id, page) {
    //call api series by cate and page
    //data =>
  }
  converter(res,data):Promise<any>{
    //console.log('converter---------------------------------------')
    return new Promise((resolve, reject) => {
      //let data : any [] = []
      for(let r of res){
        let n = {
          fav : false,          
          tmdb : r.tmdb,
          created_at : r.created_at,
          season : r.num,
          seasonTmdb : r.tmdb,
          num : r.num,
          tv : r.tv,
          type : r.type,
          poster : '',
          release_date:'',
          vote_average:'',
          first_air_date:'',
          title:'',
          name:'',
          Epi:r.Epi,
        }
        this.getTMDB(n).subscribe((res) => {
          n.poster =  res.poster_path 
          n.release_date = res.release_date
          n.vote_average = res.vote_average
          n.first_air_date = res.air_date
          n.title = res.title
          n.name = res.name
          //console.log('----------------------------------------')
          //console.log(res)
          //console.log(n)
          //console.log('----------------------------------------')
          data.push(n)
          this.upcomingMovies.push(n)
        })
        //data.push(this.getTMDB(n))
      }
      //console.log(data)
      //console.log('converter---------------------------------------')
      resolve(data)
    });
  }
  getTMDB(d){
   /*  if(d.type == 'mov'){
      return this._tmdb.getMovie(d.tmdb)
    }
    else if (d.type == 'epi'){
      return this._tmdb.getTV(d.tv)
    } */
    return this._tmdb.getSeason(d.tv,d.num)
  }

  data1 : any[]=[]
  data2 : any[]=[]
  data3 : any[]=[]
  data4 : any[]=[]
  data5 : any[]=[]
  data6 : any[]=[]
  data7 : any[]=[]
  data8 : any[]=[]
  data9 : any[]=[]

  _page1 = 0
  _page2 = 0
  _page3 = 0
  _page4 = 0
  _page5 = 0
  _page6 = 0
  _page7 = 0
  _page8 = 0
  _page9 = 0
  

  loadFirst() {
  /*   if (cate == '8') { */
      this.MovApi.getSeasonsByCategory(this._page1,8).toPromise().then(res => {
        //this.data1 = res
        this.converter(res,this.data1)
        //console.log(res)
        this._page1 ++
     /*    e.complete() */
      })
    /* } else if (cate == '15') { */
      this.MovApi.getSeasonsByCategory(this._page2,15).toPromise().then(res => {
        //this.data2 = res
        this.converter(res,this.data2)
        //console.log(res)
        this._page2 ++
      /*   e.complete() */
      })
 /*    } else if (cate == '12') { */
      this.MovApi.getSeasonsByCategory(this._page3,12).toPromise().then(res => {
        //this.data3 = res
        this.converter(res,this.data3)
        //console.log(res)
        this._page3 ++
      /*   e.complete() */
      })
  /*   } else if (cate == '7') { */
      this.MovApi.getSeasonsByCategory(this._page4,7).toPromise().then(res => {
        //this.data4 = res
        this.converter(res,this.data4)
        //console.log(res)
        this._page4 ++
       /*  e.complete() */
      })
/*     } else if (cate == '11') { */
      this.MovApi.getSeasonsByCategory(this._page5,11).toPromise().then(res => {
        //this.data5 = res
        this.converter(res,this.data5)
        //console.log(res)
        this._page5 ++
       /*  e.complete() */
      })
/*     } else if (cate == '8') { */
      this.MovApi.getSeasonsByCategory(this._page6,8).toPromise().then(res => {
        //this.data6 = res
        this.converter(res,this.data6)
        //console.log(res)
        this._page6 ++
  /*       e.complete() */
      })
/*     } else if (cate == '10') { */
      this.MovApi.getSeasonsByCategory(this._page6,10).toPromise().then(res => {
        //this.data6 = res
        this.converter(res,this.data6)
        //console.log(res)
        this._page6 ++
      /*   e.complete() */
      })
/*     } else if (cate == '13') { */
      this.MovApi.getSeasonsByCategory(this._page6,13).toPromise().then(res => {
        //this.data6 = res
        this.converter(res,this.data6)
        //console.log(res)
        this._page6 ++
   /*      e.complete() */
      })
/*     } else if (cate == '14') { */
      this.MovApi.getSeasonsByCategory(this._page6,14).toPromise().then(res => {
        //this.data6 = res
        this.converter(res,this.data6)
        //console.log(res)
        this._page6 ++
     /*    e.complete() */
      })
 /*    } */
  }

  doInfinite(e) {
    //console.log('Begin async operation');
    return /* this.movies.latest(this._pageNo).toPromise().then(res => {
      this.upcomingMovies = this.upcomingMovies.concat(res.results)
      this._pageNo++
      //console.log('Async operation ended');
      e.complete()
    }).catch(err => {
      this.presentToast("Can't fetch you more movies. There seems to be something wrong with the network ðŸ˜¥ðŸ“µ")
    }) */
  }
  load(e,cate) {
    if (cate == '8') {
      return this.MovApi.getSeasonsByCategory(this._page1,8).toPromise().then(res => {
        //this.data1 = res
        this.converter(res,this.data1)
        //console.log(res)
        this._page1 ++
        e.complete()
      })
    } else if (cate == '15') {
      return this.MovApi.getSeasonsByCategory(this._page2,15).toPromise().then(res => {
        //this.data2 = res
        this.converter(res,this.data2)
        //console.log(res)
        this._page2 ++
        e.complete()
      })
    } else if (cate == '12') {
      return this.MovApi.getSeasonsByCategory(this._page3,12).toPromise().then(res => {
        //this.data3 = res
        this.converter(res,this.data3)
        //console.log(res)
        this._page3 ++
        e.complete()
      })
    } else if (cate == '7') {
      return this.MovApi.getSeasonsByCategory(this._page4,7).toPromise().then(res => {
        //this.data4 = res
        this.converter(res,this.data4)
        //console.log(res)
        this._page4 ++
        e.complete()
      })
    } else if (cate == '11') {
      return this.MovApi.getSeasonsByCategory(this._page5,11).toPromise().then(res => {
        //this.data5 = res
        this.converter(res,this.data5)
        //console.log(res)
        this._page5 ++
        e.complete()
      })
    } else if (cate == '8') {
      return this.MovApi.getSeasonsByCategory(this._page6,8).toPromise().then(res => {
        //this.data6 = res
        this.converter(res,this.data6)
        //console.log(res)
        this._page6 ++
        e.complete()
      })
    } else if (cate == '10') {
      return this.MovApi.getSeasonsByCategory(this._page7,10).toPromise().then(res => {
        //this.data6 = res
        this.converter(res,this.data7)
        //console.log(res)
        this._page7 ++
        e.complete()
      })
    } else if (cate == '13') {
      return this.MovApi.getSeasonsByCategory(this._page8,13).toPromise().then(res => {
        //this.data6 = res
        this.converter(res,this.data8)
        //console.log(res)
        this._page8 ++
        e.complete()
      })
    } else if (cate == '14') {
      return this.MovApi.getSeasonsByCategory(this._page9,14).toPromise().then(res => {
        //this.data6 = res
        this.converter(res,this.data9)
        //console.log(res)
        this._page9 ++
        e.complete()
      })
    }
  }
  
  favoriteFilm(f) {
    f.fav = true;
    this.favoriteProvider.favoriteFilm(f).then(() => {
    });
  }
 
  unfavoriteFilm(f) {
    f.fav = false;
    this.favoriteProvider.unfavoriteFilm(f).then(() => {
    });
  }
}
