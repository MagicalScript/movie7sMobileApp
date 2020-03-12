import { HttpClient } from '@angular/common/http';
import { Injectable, state } from '@angular/core';
import { AuthProvider } from '../auth/auth';

/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalProvider {

  static numberOfAdShows = 1
  public static user: AuthProvider

  public static runing = true
  constructor(public http: HttpClient) {
    console.log('Hello GlobalProvider Provider');
  }

  public static isRaning() {
    return this.runing
  }
  private static turn = 0
  static _user = {
    token: '',
    name: '',
    role: '',
    loginDate: '',
    diffDays: +'',
  }
  static getCurrentUser() {
    try {
      this._user = {
        token: JSON.parse(localStorage.getItem('api_token')),
        name: JSON.parse(localStorage.getItem('name')),
        role: JSON.parse(localStorage.getItem('role')),
        loginDate: JSON.parse(localStorage.getItem('LoginDate')),
        diffDays: +'',
      }
      let displayDate = new Date;
      let newDate = new Date(this._user.loginDate);
      console.log('-- USER LOGIN TEST ----')
      var diff = Math.abs(newDate.getTime() - displayDate.getTime());
      var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
      this._user.diffDays = diffDays
      console.log(diffDays)
      console.log('getCurrentUser')
      console.log(this._user)
      return this._user;
    } catch (error) {
      return this._user
    }
  }
  public static run() {
    if (this.getCurrentUser().diffDays <= 30 && this.getCurrentUser().role == '2') {
      /*   if(this.turn < this.numberOfAdShows){
          this.turn ++ */
      this.runing = false
    } else {
      /*   this.turn = 0 */
      this.runing = true

    }
  }

}
