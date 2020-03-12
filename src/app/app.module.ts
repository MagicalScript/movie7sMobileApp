import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from "@angular/http";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from "@ionic/storage";
import { AdMobFree } from '@ionic-native/admob-free';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { EmailComposer } from '@ionic-native/email-composer';


// import { PhotoViewer } from "@ionic-native/photo-viewer";

import { MoviesApi } from "../providers/api/movies-api";
import { SeriesApi } from "../providers/api/series-api";
import { ActorsApi } from "../providers/api/actors-api";
import { Api } from "../providers/api/api";

import { MoviesStorage } from "../providers/storage/movies-storage";
import { SeriesStorage } from "../providers/storage/series-storage";
import { ActorsStorage } from "../providers/storage/actors-storage";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StreamingMedia } from '@ionic-native/streaming-media';
import { MoviesApiProvider } from '../providers/movies-api/movies-api';
import { TmdbProvider } from '../providers/tmdb/tmdb';
import { FavoriteProvider } from '../providers/favorite/favorite';
import { GlobalProvider } from '../providers/global/global';
import { EventLoggerProvider } from '../providers/event-logger/event-logger';
import { AuthProvider } from '../providers/auth/auth';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp,{
      backButtonText: 'رجوع',
      backButtonIcon: 'ios-arrow-back',
      iconMode: 'md'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  
  providers: [
    StatusBar,
    SplashScreen,
    // PhotoViewer,
    MoviesApi,
    ActorsApi,
    SeriesApi,
    MoviesStorage,
    ActorsStorage,
    SeriesStorage,
    Api,
    StreamingMedia,
    AdMobFree,
    LocalNotifications,
    EmailComposer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MoviesApiProvider,
    TmdbProvider,
    FavoriteProvider,
    GlobalProvider,
    EventLoggerProvider,
    AuthProvider
  ]
})
export class AppModule {}
