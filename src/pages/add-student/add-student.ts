import { Course } from './../../models/course';
import { ImageDataServiceProvider } from './../../providers/data-service/image-data-service';
import { UtilitiesProvider } from './../../providers/utilities/utilities';
import { CameraServiceProvider } from './../../providers/camera-service/camera-service';
import { Student } from './../../models/student';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the AddStudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-student',
  templateUrl: 'add-student.html',
})
export class AddStudentPage {

  imageData: string;
  nonNormalized: string;
  student = {} as Student;
  courseId: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private cam: CameraServiceProvider, public domSanitizer: DomSanitizer,
    private view: ViewController, private utilities: UtilitiesProvider,
    private data: ImageDataServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.courseId = this.navParams.get('courseId');
  }

  async takePhoto() {
    try {
      this.imageData = await this.cam.takePicture();      
    } catch (e) {
      this.utilities.createToast(e, 3000).present();
    }
  }

  async submit() {
    this.student.image = `stu-${this.courseId}-${this.student.name.replace(/\s/g, '')}`;
    if (this.student.name != '' && this.imageData != null && this.student.image != '') {
      this.student.imageData = this.imageData;
      this.utilities.createToast('Added student!', 2000).present();
      this.view.dismiss({student: this.student, added: true});
    } else {
      this.utilities.createToast('Complete missing fields.', 3000).present();
    }
  }

  delete() {
    this.imageData = null;
  }

  dismiss() {
    this.view.dismiss({added: false});
  }

}
