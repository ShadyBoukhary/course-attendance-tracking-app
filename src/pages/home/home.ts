import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { CameraServiceProvider } from '../../providers/camera-service/camera-service';
import { DomSanitizer } from '@angular/platform-browser';

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
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private cam: CameraServiceProvider, private toast: ToastController,
    public domSanitizer: DomSanitizer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  async takePhoto() {
    try {
      this.imageData = await this.cam.takePicture();
    } catch (e) {
      this.toast.create({
        message: e.message,
        duration: 3000
      }).present();
    }
  }

  async submit() {

  }

  delete() {
    this.imageData = null;
  }
}
