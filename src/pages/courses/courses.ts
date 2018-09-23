import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('visibilityChanged', [
      state('shown', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('* => *', animate('500ms'))
    ])
  ]
})
export class CoursesPage {

  toggledIndex: number;
  visibility: String;
  courses: Course[];
  constructor(public navCtrl: NavController, private modal: ModalController, private data: CourseDataServiceProvider, private utilities: UtilitiesProvider, private detector: ChangeDetectorRef) {
    this.visibility = 'hidden';
    this.toggledIndex = -1;
  }

  ionViewWillLoad() {
    this.getCourses();
  }

  animate() {
    console.log("hi");
    this.visibility = 'shown'
  }

  navigateTo(page: string) {
    let modal = this.modal.create(page, null, {
      cssClass: 'full-modal'
    });
    modal.present();
  }

  async getCourses() {
    try {
      this.courses = await this.data.getUserCourses();
      this.detector.markForCheck();
      
      this.animate();
    } catch (e) {
      this.utilities.createToast(e, 3000).present();
    }
  }

  getRandomImage() {
    let random = Math.floor(Math.random() * 12);
    return `assets/imgs/image${random}.jpg`;
  }

  toggleButtons(i: number) {
    if (i === this.toggledIndex) {
      this.toggledIndex = -1;
    } else {
      this.toggledIndex = i;
    }
  
  }

}
