import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MovihomePage } from './movihome';

@NgModule({
  declarations: [
    MovihomePage,
  ],
  imports: [
    IonicPageModule.forChild(MovihomePage),
  ],
})
export class MovihomePageModule {}
