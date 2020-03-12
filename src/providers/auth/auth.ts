import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
//import { HttpClient } from '@angular/common/http';
//import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';


@Injectable()
export class AuthProvider {

  ApiProvider = "http://api.movie7s.com"
  //ApiProvider = "http://localhost:8000"
  //headers = new HttpHeaders;
  private _dbPromise: Promise<any>;
  constructor(private http: Http) {
    /* this.headers = new HttpHeaders()
    .set("Content-Type", "application/json"); */
  }

  login(email: string, password: string): Promise<any> {
    return this._dbPromise = new Promise((resolve, reject) => {
      try {
        this.http.post(this.ApiProvider + '/login', { email: email, password: password })
          .map(response => response.json())
          .subscribe((res) => {
            /* console.log(res['message']['role'])
            console.log(res) */
            if (res['api_token'] != '') {
              /* if (res['message']['role'] == '9') { */
             /*  this.rooter.navigate(['/']) */
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('api_token', JSON.stringify(res['api_token']));
              localStorage.setItem('name', JSON.stringify(res['message']['name']));
              localStorage.setItem('user', JSON.stringify(res['message']));
              localStorage.setItem('role', JSON.stringify(res['message']['role']));
              let displayDate = new Date().toLocaleDateString();
              localStorage.setItem('LoginDate', JSON.stringify(displayDate));
              
              
              console.log()
              resolve(res)
              /*   } */
            }
          });
      } catch (err) {
        reject({ err: err });
      }
    });
  }

  /*   logout() {
      const headers = new HttpHeaders()
        .set("api_token", this.getCurrentUser());
      return this.http.delete('xqx', { headers }).subscribe((res) => {
        if (res['statue'] = 'ok') {
  
          // remove user from local storage to log user out
          localStorage.removeItem('api_token');
  
        }
      })
    } */
    user = {
      token : '',
      name : '',
      role : '',
      loginDate : '',
      diffDays : +'',
    }

  logout(){
    localStorage.removeItem('api_token');
    localStorage.removeItem('name');
    localStorage.removeItem('user');
    localStorage.removeItem('role');
  }
  getCurrentUser() {
    try {
      this.user = {
        token : JSON.parse(localStorage.getItem('api_token')),
        name : JSON.parse(localStorage.getItem('name')),
        role : JSON.parse(localStorage.getItem('role')),
        loginDate : JSON.parse(localStorage.getItem('LoginDate')),
        diffDays : +'',
      }
      let displayDate = new Date;
      let newDate = new Date(this.user.loginDate);
      console.log('-- USER LOGIN TEST ----')
      var diff = Math.abs(newDate.getTime() - displayDate.getTime());
      var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
      this.user.diffDays = diffDays
      console.log(diffDays)
      console.log('getCurrentUser')
      console.log(this.user)
      return this.user;
    } catch (error) {
      return this.user
    }
  }
  getUserId() {
    try {
      let user = JSON.parse(localStorage.getItem('user'))
      console.log('getCurrentUser')
      console.log(user)
      return user.id;      
    } catch (error) {
      return ''
    }
  }
  isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }
  loggedIn(): boolean {
    /* console.log(this.getCurrentUser()) */
    if (this.getCurrentUser().token !=  null && this.getCurrentUser().token !=  '') {
      return true;
    } else {
      return false;
    }
  }


  /*  saveCurrentUser(user: User) {
       const currentUser = JSON.parse(localStorage.getItem('currentUser'));
       currentUser.user = user;
       localStorage.setItem('currentUser', JSON.stringify(currentUser));
   } */

  /*  forgotPassword(email: string) {
       return this.api.post('/password/email', {email: email});
   } */

  /* resetPassword(data: any) {
      return this.api.post('/password/reset', data);
  } */
/*   getUser() {
    let txt = this.ApiProvider + '/users';
    //console.log(txt)
    return this.http.get(txt);
  } */
/*   getUserById(id) {
    let txt = this.ApiProvider + '/users/' + id;
    //console.log(txt)
    return this.http.get(txt);
  } */
/*   UpdateUser(data) {
    console.log("_____________________patch_______________________________________________");
    let url = this.ApiProvider + '/users/' + data.id;
    return this.http.patch(url, data);
  } */
/*   deleteUser(id) {
    console.log("_____________________DELETE_______________________________________________");
    let url = this.ApiProvider + '/users/' + id;
    return this.http.delete(url);
  } */


  regesterUser(email, password,name) {
    console.log("_____________________POST Auth_______________________________________________");
    let url = this.ApiProvider + '/register';
    return this.http.post(url, { email: email, password: password ,name : name}).map(response => response.json());
  }

}
