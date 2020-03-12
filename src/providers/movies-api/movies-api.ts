import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MoviesApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoviesApiProvider {
  //private apiRoot = "http://localhost:8000"
  private apiRoot = "http://api.movie7s.com"

  constructor(
    private http: HttpClient,
  ) { }

  gethello() {
    let txt = this.apiRoot + '/';
    //console.log(txt)
    return this.http.get(txt);
  }
  getnews(page) {
    let txt = this.apiRoot + '/news/' + page;
    //console.log(txt)
    return this.http.get(txt);
  }

  addServer(_data) {
    console.log("POST");
    let url = this.apiRoot + '/addServer';
    return this.http.post(url, _data);
  }

  getTvPage(page) {
    let txt = this.apiRoot + '/tv/' + page;
    //console.log(txt)
    return this.http.get(txt);
  }
  getTvPageCategory(page, Cate) {
    let txt = this.apiRoot + '/tv/' + page + '&' + Cate;
    //console.log(txt)
    return this.http.get(txt);
  }

  getCategoriesList() {
    let txt = this.apiRoot + '/getCategory/';
    //console.log(txt)
    return this.http.get(txt);
  }
  getMoviesPage(page) {
    let txt = this.apiRoot + '/mov/' + page;
    console.log(txt)
    return this.http.get(txt);
  }
  getMoviesPageCategory(page, Cate) {
    let txt = this.apiRoot + '/movByCate/' + page + '&' + Cate;
    console.log(txt)
    return this.http.get(txt);
  }
  getSeasonByTvPage(id, page) {
    let txt = this.apiRoot + '/sea/' + id + '&' + page;
    //console.log(txt)
    return this.http.get(txt);
  }
  getEpiBySeaPage(id, page) {
    let txt = this.apiRoot + '/epi/' + id + '&' + page;
    console.log(txt)
    return this.http.get(txt);
  }
  getLinksbyTmdbPage(id, page) {
    let txt = this.apiRoot + '/link/' + id + '&' + page;
    console.log(txt)
    return this.http.get(txt);
  }
  deleteLinkById(id) {
    let txt = this.apiRoot + '/deleteserver/' + id;
    return this.http.delete(txt);
  }
  getShowTime(page) {
    let txt = this.apiRoot + '/showtimes/' + page;
    return this.http.get(txt)
  }
  getShowTimeByTmdb(id, page) {
    let txt = this.apiRoot + '/showtimesTmdb/' + id + '&' + page;
    console.log(txt)
    return this.http.get(txt);
  }
  deleteShowTimeById(id) {
    let txt = this.apiRoot + '/deletetime/' + id;
    return this.http.delete(txt);
  }
  doPOSTShowTime(_data) {
    console.log("_____________________POST_______________________________________________");
    let url = this.apiRoot + '/addShowTime';
    return this.http.post(url, _data);
  }
  addCommentTmdb(comment) {
    console.log("______________POST Commnet________________________________");
    let url = this.apiRoot + '/addComment';
    console.log(url)
    return this.http.post(url, comment);
  }
  addMovie(movi) {
    console.log("_____________________POST_______________________________________________");
    let url = this.apiRoot + '/addMovies';
    return this.http.post(url, movi);
  }
  addInfo(info) {
    console.log("_____________________POST_______________________________________________");
    let url = this.apiRoot + '/addInfo';
    /*  console.log(url);
     console.log(info) */
    return this.http.post(url, info);
  }
  addCategory(cate) {
    console.log("_____________________POST_______________________________________________");
    let url = this.apiRoot + '/addCategory';
    return this.http.post(url, cate);
  }
  addTv(tv) {
    console.log("_____________________POST_______________________________________________");
    let url = this.apiRoot + '/addTvShow';
    return this.http.post(url, tv);
  }
  addSeason(season) {
    console.log("_____________________POST_______________________________________________");
    let url = this.apiRoot + '/addSeason';
    return this.http.post(url, season);
  }
  addEpisode(episode) {
    console.log("_____________________POST_______________________________________________");
    let url = this.apiRoot + '/addEpisode';
    return this.http.post(url, episode);
  }
  getinfo(tmdb) {
    let txt = this.apiRoot + '/info/' + tmdb;
    console.log(txt)
    return this.http.get(txt);
  }
  getSeasonsByCategory(page, Cate) {
    let txt = this.apiRoot + '/newseasons/' + page + '&' + Cate;
    console.log(txt)
    return this.http.get(txt);
  }
  getCommentTmdb(tmdb, page) {
    let txt = this.apiRoot + '/getComment/' + tmdb + '&' + page;
    console.log(txt)
    return this.http.get(txt);
  }

}
