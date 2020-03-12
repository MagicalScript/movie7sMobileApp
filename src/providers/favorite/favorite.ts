import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
 
const STORAGE_KEY = 'favoriteFilms';
 
@Injectable()
export class FavoriteProvider {
 
  constructor(public storage: Storage) { }
 
  isFavorite(filmId) {
    return this.getAllFavoriteFilms().then(result => {
      return result && result.indexOf(filmId) !== -1;
    });
  }
 
  favoriteFilm(filmId) {
    return this.unfavoriteFilm(filmId).then((res) => {
      this.getAllFavoriteFilms().then(result => {
        if (result) {
          result.push(filmId);
          return this.storage.set(STORAGE_KEY, result);
        } else {
          return this.storage.set(STORAGE_KEY, [filmId]);
        }
      });
    })
  }
 
  unfavoriteFilm(filmId) {
    return this.getAllFavoriteFilms().then(result => {
      if (result) {
        for(let i of result){
          if(i.tmdb == filmId.tmdb){ 
            var index = result.indexOf(i);
            result.splice(index, 1);
            this.storage.set(STORAGE_KEY, result);
          }
        }
      }
    });
  }
 
  getAllFavoriteFilms() {
    return this.storage.get(STORAGE_KEY);
  }
 
}