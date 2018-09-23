import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CourseDataServiceProvider } from '../../providers/data-service/course-data-service';
import { UtilitiesProvider } from '../../providers/utilities/utilities';
import { Course } from '../../models/course';


/**
 * Generated class for the CoursesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-courses',
  templateUrl: 'courses.html',
  animations: [
    trigger('visibilityChanged', [
      state('shown', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('* => *', animate('500ms'))
    ])
  ]
})
export class CoursesPage {

  visibility: String;
  courses: Course[];
  constructor(public navCtrl: NavController, private modal: ModalController, private data: CourseDataServiceProvider, private utilities: UtilitiesProvider) {
    this.visibility = 'hidden';
  }

  ionViewWillLoad() {
    this.getCourses();
  }

  animate() {
    console.log("hi");
    this.visibility = 'shown'
  }

  navigateTo(page: string) {
    let modal = this.modal.create(page);
    modal.present();
  }

  async getCourses() {
    try {
      this.courses = await this.data.getUserCourses();
      this.animate();
    } catch (e) {
      this.utilities.createToast(e, 3000).present();
    }
  }

}
