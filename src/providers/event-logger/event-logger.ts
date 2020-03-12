import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';
 
@Injectable()
export class EventLoggerProvider {
  static fba: FirebaseAnalytics
  constructor(/* public fba: FirebaseAnalytics */) {
    console.log('Hello EventLoggerProvider Provider');
  }
 
  public static logButton(name:string,value:any){
/*     this.fba.logEvent(name, { pram:value })
    .then((res: any) => {console.log(res);})
    .catch((error: any) => console.error(error)); */
  }
}