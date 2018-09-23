import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoursesPage } from './courses';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    CoursesPage,
  ],
  imports: [
    IonicPageModule.forChild(CoursesPage),
    DirectivesModule
  ],
})
export class CoursesPageModule {}
