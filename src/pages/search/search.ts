import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { Api } from "../../providers/api/api";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/distinctUntilChanged';
import { TmdbProvider } from '../../providers/tmdb/tmdb';

@IonicPage({
  defaultHistory:["Home"]
})
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class Search {
  public _type;
  public queryText;
  public result;
  private _req;
  private isSearching:boolean = false;
  private size = 342;

  constructor(private tmdb: TmdbProvider, public navCtrl: NavController, public navParams: NavParams, public popCtrl: PopoverController, private _api: Api) {
    console.log(this.navParams.data.type)
    this._type = this.navParams.data.type || "movies"
  }
  search() {
    clearTimeout(this._req)
    this._req = setTimeout(()=> {
      if (this.queryText.length < 3) return
      this.isSearching = true
/*       this._api.search(this.queryText, this._type).subscribe(res => {
        console.log(res)
        this.isSearching = false
        this.result = res.results
      }) */
      this.tmdb.search(this.queryText).subscribe((res) => {
        console.log(res)
        this.isSearching = false
        this.converter(res.results).then(_res=>{
          this.result = _res
        })
        //this.result = res.results
      })
      console.info("Sending request")
    }, 1000)
  }
  Osearch() {
    Observable.of(this.queryText)
      .distinctUntilChanged()
      .filter(x => x.length > 3)
      .debounceTime(1000)
      .switchMap(res => this._api.search(res, this._type))
      .subscribe(res => {
        // console.log(res)
        this.result = res.results
      })
  }
  nav(data) {
    console.log(data)
    switch (data.type) {
      case "mov": return this.navMovie(data)
      //case "actors": return this.navActor(data)
      case "season": return this.navSerie(data)
    }
  }
  navActor(actor) {
    this.navCtrl.push("ActorDetails", {data: actor, id: actor.id})
  }
  navMovie(movie) {
    this.navCtrl.push("MovieDetails", {id: movie.tmdb, data: movie, imgSize: 500})
  }
  navSerie(serie) {
    this.navCtrl.push("EpisodeDetailsPage", {id: serie.tmdb, data: serie})
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Search');
  }

  converter(res):Promise<any>{
    return new Promise((resolve, reject) => {
      let data : any [] = []
      for(let r of res){

        let n = {
          fav : false,          
          tmdb : r.id,
          created_at : r.created_at,
          season : 1,
          seasonTmdb : '',
          num : 1,
          tv : r.id,
          type : (r.media_type=='tv'?'season':'mov'),
          poster : r.poster_path,
          release_date:r.release_date,
          vote_average:r.vote_count,
          first_air_date:r.first_air_date,
          title:r.title,
          name:r.name,
          overview:r.overview,
        }
        data.push(n)
        console.log('----t-t-trbtrt------------')
        console.log(n)
        console.log(r)
        //data.push(this.getTMDB(n))
      }
      console.log(data)
      resolve(data)
    });
  }
  getTMDB(d){
    if(d.media_type == 'mov'){
      return this.tmdb.getMovie(d.tmdb)
    }
    else if (d.media_type == 'epi'){
      return this.tmdb.getTV(d.tv)
    }
  }

}
