import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  email = ''
  password = ''
  name=''
  constructor(private authApi : AuthProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  signup(email,password,name){
    this.authApi.regesterUser(email,password,name).subscribe((res) => {
      console.log(res)
      if(res['success'] == true){
        this.navCtrl.push('LoginPage')
      }
    })
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
