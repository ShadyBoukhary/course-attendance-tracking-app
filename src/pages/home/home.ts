import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ViewController, normalizeURL } from 'ionic-angular';
import { CameraServiceProvider } from '../../providers/camera-service/camera-service';
import { DomSanitizer } from '@angular/platform-browser';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { Course } from '../../models/course';
import { UtilitiesProvider } from '../../providers/utilities/utilities';
import {ImageDataServiceProvider} from '../../providers/data-service/image-data-service';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  imageData: string;
  nonNormalized: string;
  course: Course;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private cam: CameraServiceProvider, public domSanitizer: DomSanitizer,
    private view: ViewController, private utilities: UtilitiesProvider,
    private data: ImageDataServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.course = this.navParams.get('course');
  }

  async takePhoto() {
    try {
      this.imageData = await this.cam.takePicture();
      console.log(this.imageData);
    } catch (e) {
      this.utilities.createToast(e, 3000).present();
    }
  }

  async submit() {
    let loader = this.utilities.createLoading('Uploading image...');
    loader.present();
    let time = Math.floor(Date.now() / 1000).toString();
    try {
      await this.data.uploadImage(this.imageData, this.course.getId(), time);
      await loader.dismiss();
      this.utilities.createToast('Image has been uploaded!', 2000).present();
      this.delete();
      let results = await this.data.getImageResults(time);
      alert(JSON.stringify(results));
      //this.dismiss();
    } catch (e) {
      await loader.dismiss();
      alert(e);
    }
  }

  delete() {
    this.imageData = null;
  }

  dismiss() {
    this.view.dismiss();
  }
}
