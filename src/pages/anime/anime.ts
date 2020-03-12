import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoviesApiProvider } from '../../providers/movies-api/movies-api';
import { TmdbProvider } from '../../providers/tmdb/tmdb';

/**
 * Generated class for the AnimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-anime',
  templateUrl: 'anime.html',
})
export class AnimePage {

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
  constructor(private _tmdb: TmdbProvider, private MovApi: MoviesApiProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.loadFirst()    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnimePage');
  }
  _page1 = 0
  data4: any[] = []
  loadFirst() {
    /*   if (cate == '8') { */
    this.MovApi.getSeasonsByCategory(this._page1, 7).toPromise().then(res => {
      //this.data1 = res
      this.converter(res, this.data4)
      //console.log(res)
      this._page1++
      /*    e.complete() */
    })
  }
  load(e,cate) {
      return this.MovApi.getSeasonsByCategory(this._page1,7).toPromise().then(res => {
        //this.data1 = res
        this.converter(res,this.data4)
        //console.log(res)
        this._page1 ++
        e.complete()
      })
  }

  converter(res, data): Promise<any> {
    //console.log('converter---------------------------------------')
    return new Promise((resolve, reject) => {
      //let data : any [] = []
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
        this.getTMDB(n).subscribe((res) => {
          n.poster = res.poster_path
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
          //this.upcomingMovies.push(n)
        })
        //data.push(this.getTMDB(n))
      }
      //console.log(data)
      //console.log('converter---------------------------------------')
      resolve(data)
    });
  }

  getTMDB(d) {
    /*  if(d.type == 'mov'){
       return this._tmdb.getMovie(d.tmdb)
     }
     else if (d.type == 'epi'){
       return this._tmdb.getTV(d.tv)
     } */
    return this._tmdb.getSeason(d.tv, d.num)
  }
}
