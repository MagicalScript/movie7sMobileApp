import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Api } from "../providers/api/api";
import { EventLoggerProvider } from '../providers/event-logger/event-logger';
import { AuthProvider } from '../providers/auth/auth';
import { Events } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { DateTime } from 'ionic-angular/components/datetime/datetime';
import { GlobalProvider } from '../providers/global/global';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = "Home";
  pages = [
    { name: "الرئيسية", component: "Home" },
    { name: "مكتبتي", component: "FavoritesPage" },
    { name: "الأفلام", component: "MovihomePage" },
    { name: "المسلسلات", component: "SerieHomePage" },
    { name: "الانمي", component: "AnimePage" },
    { name: "راسلنا", component: "ContactusPage" }
  ]
  notifyTime: any;
  notifications: any[] = [];
  chosenHours: number = 20;
  chosenMinutes: number = 30;

  openPage(p) {
    this.nav.setRoot(p.component)
  }
  gotoLogin() {
    this.nav.setRoot('LoginPage')
  }
  gotoRegester() {
    this.nav.setRoot('RegisterPage')
  }
  constructor(public _platform: Platform, private localNotifications: LocalNotifications, public events: Events, private user: AuthProvider, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl: MenuController, private api: Api) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.api.getAll();
      this.getUser()
      EventLoggerProvider.logButton('startApp', { pram: "paramValue" })
      GlobalProvider.run();
      events.subscribe('user:login', () => {
        this.getUser();
      });

/*       this.localNotifications.schedule({
        id: 10,
        title: 'Attention',
        text: 'Simons Notification',
        data: { mydata: 'My hidden message this is' },
        at: new Date(new Date().getTime() + 5 * 1000)
      }); */

      this.addNotifications()


    });
  }
  _user = {
    token: '',
    name: 'لا يوجد حساب مفعل',
  }
  LogOut(){
    this.user.logout()
    this.getUser()
  }
  mdays = [
    { title: 'Monday', dayCode: 1, checked: true },
    { title: 'Tuesday', dayCode: 2, checked: true },
    { title: 'Wednesday', dayCode: 3, checked: true },
    { title: 'Thursday', dayCode: 4, checked: true },
    { title: 'Friday', dayCode: 5, checked: true },
    { title: 'Saturday', dayCode: 6, checked: true },
    { title: 'Sunday', dayCode: 0, checked: true }
  ];
  notLogged = true
  getUser() {
    if (this.user.loggedIn()) {
      this._user = this.user.getCurrentUser()
      this.notLogged = false
    }else{
      this._user = {
        token: '',
        name: 'لا يوجد حساب مفعل',
      }
      this.notLogged = true
    }
  }
  
  notif
  addNotifications() {


    let currentDate = new Date();
    let currentDay = currentDate.getDay(); // Sunday = 0, Monday = 1, etc.

    for (let day of this.mdays) {

      if (day.checked) {

        let firstNotificationTime = new Date();
        let dayDifference = day.dayCode - currentDay;

        if (dayDifference < 0) {
          dayDifference = dayDifference + 7; // for cases where the day is in the following week
        }

        firstNotificationTime.setHours(firstNotificationTime.getHours() + (24 * (dayDifference)));
        firstNotificationTime.setHours(this.chosenHours);
        firstNotificationTime.setMinutes(this.chosenMinutes);

        this.notif = {
          id: day.dayCode,
          title: 'Movies7',
          text: 'لقد تم إضافة الأفلام والمسلسلات الجديدة اليوم ، انقر و اكتشف هنا',
          icon: 'file://assets/imgs/favicon.png',
          data: { mydata: 'My hidden message this is' },
          at: new Date(firstNotificationTime.getTime() + 5 * 1000)
        }
        this.notifications.push(this.notif);
      }
    }
    console.log(this.notifications)
    this.localNotifications.schedule(this.notifications);
  }

  timeChange(time) {
    this.chosenHours = 20;
    this.chosenMinutes = 30;
  }
  cancelAll() {

    this.localNotifications.cancelAll();

  }
}
