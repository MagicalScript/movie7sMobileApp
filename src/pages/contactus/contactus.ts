import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';

/**
 * Generated class for the ContactusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contactus',
  templateUrl: 'contactus.html',
})
export class ContactusPage {

  contact= {
    name : '',
    email : '',
    message : '',
  }


  constructor(private emailComposer: EmailComposer,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactusPage');
  }
  sendContact(){
    let email = {
      to: 'max@mustermann.de',
      cc: this.contact.email,
      subject: 'Movies7 App Users Mail',
      body: this.contact.message,
      isHtml: true
    };
    
    // Send a text message using default options
    this.emailComposer.open(email);
  }
}
