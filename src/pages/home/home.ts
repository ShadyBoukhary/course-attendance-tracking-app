import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { CameraServiceProvider } from '../../providers/camera-service/camera-service';
import { DomSanitizer } from '@angular/platform-browser';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { User } from '../../models/user';

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
  profile: User;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private cam: CameraServiceProvider, private toast: ToastController,
    public domSanitizer: DomSanitizer, private data: DataServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.getUser();
    
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

  async getUser() {
    try {
      
      this.profile = await this.data.getUserProfile() as User;
      console.log(this.profile);
      this.update();
    } catch (e) {
      console.log(e);
    }
  }

  async update() {
    try {
      
       let prof = await this.data.updateUserProfile(this.profile);
      console.log(prof);
    } catch (e) {
      console.log(e);
    }
  }

  delete() {
    this.imageData = null;
  }
}
