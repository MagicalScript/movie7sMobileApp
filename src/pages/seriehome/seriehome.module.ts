import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SerieHomePage } from './seriehome';

@NgModule({
  declarations: [
    SerieHomePage,
  ],
  imports: [
    IonicPageModule.forChild(SerieHomePage),
  ],
})
export class SerieHomePageModule {}
