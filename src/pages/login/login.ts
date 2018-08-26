import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { Account } from '../../models/account/account.interface';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoginResponse } from '../../models/login/login-response.interface';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  account = {} as Account;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private toast: ToastController, private auth: AuthServiceProvider,
    private loading: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  register() {
    this.navCtrl.push('RegisterPage');
  }

  async login() {
    let loading = this.loading.create({
      spinner: 'crescent',
      content: 'Logging in...',
    });
    console.log(this.account);
    if (this.account.email != null && this.account.password != null && this.account.email != '' && this.account.password != '') {

      loading.present();
      let res: LoginResponse = await this.auth.signInWithEmailAndPassword(this.account);
      if (!res.error) {
        loading.dismiss();
        this.navCtrl.setRoot('HomePage');
      } else {
        loading.dismiss();
        this.toast.create({
          message: res.error.message,
          duration: 3000
        }).present();
        console.log(res.error.message);
      }
    } else {
      this.toast.create({
        message: 'Empty fields are not allowed.',
        duration: 3000
      }).present();
    }
  }

}
