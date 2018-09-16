import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Account } from '../../models/account/account.interface';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  password: string;
  account = {} as Account;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private auth: AuthServiceProvider, private toast: ToastController,
    private loading: LoadingController) {
      this.account = {} as Account;
  } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  async register() {
    // if (this.account.password === this.password) {
    //   let load = this.loading.create({
    //     spinner: 'crescent',
    //     content: 'Creating account...'
    //   });
    //   load.present();
    //   let response = await this.auth.createUserWithEmailAndPassword(this.account);
    //   if (!response.error) {
    //     this.toast.create({
    //       message: 'Account created successfully',
    //       duration: 1500
    //     }).present();
    //     this.navCtrl.pop();
    //   } else {
    //     this.toast.create({
    //       message: response.error.message,
    //       duration: 3000
    //     }).present();
    //     console.log(response.error.message);
    //   }
    //   load.dismiss();
    // } else {
    //   this.toast.create({
    //     message: 'Password mismatch',
    //     duration: 1500
    //   }).present();
    // }
    try {
      await this.auth.signUp();
    } catch(e) {
      console.log(e);
    }
    
  }

}
