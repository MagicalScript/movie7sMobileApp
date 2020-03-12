import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { Events } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email = ''
  password = ''
  constructor(public alertCtrl: AlertController,public events: Events,private authApi : AuthProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  signin(email,password){
    this.authApi.login(email,password).then((res) => {
      if(res['success'] == true){
        this.navCtrl.setRoot('Home')
        this.events.publish('user:login');
      }
      else{
        let alert = this.alertCtrl.create({
          title: 'البريد الإلكتروني أو كلمة المرور غير صحيحة',
          buttons: ['Ok']
      });

      alert.present();
      }
    })
  }
  gotoRegester(){
    this.navCtrl.setRoot('RegisterPage')
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
