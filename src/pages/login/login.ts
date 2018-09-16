import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { Account } from '../../models/account/account.interface';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoginResponse } from '../../models/login/login-response.interface';
import { UtilitiesProvider } from '../../providers/utilities/utilities';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthServiceProvider, private utilities: UtilitiesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  register() {
    this.navCtrl.push('RegisterPage');
  }

  async login() {
    let load = this.utilities.createLoading('Logging in...');
    if (this.isValidInput()) {
      load.present();
      try {
        await this.auth.login(this.account);
        this.navCtrl.setRoot('HomePage');
      } catch(e) {
        console.log(e);
        this.utilities.createToast(e, 3000).present();
      }
      load.dismiss();
    } else {
      this.utilities.createToast('Email or password cannot be empty.', 3000).present();
    }
    
    // let loading = this.loading.create({
    //   spinner: 'crescent',
    //   content: 'Logging in...',
    // });
    // console.log(this.account);
    // if (this.account.email != null && this.account.password != null && this.account.email != '' && this.account.password != '') {

    //   loading.present();
    //   let res: LoginResponse = await this.auth.signInWithEmailAndPassword(this.account);
    //   if (!res.error) {
    //     loading.dismiss();
    //     this.navCtrl.setRoot('HomePage');
    //   } else {
    //     loading.dismiss();
    //     this.toast.create({
    //       message: res.error.message,
    //       duration: 3000
    //     }).present();
    //     console.log(res.error.message);
    //   }
    // } else {
    //   this.toast.create({
    //     message: 'Empty fields are not allowed.',
    //     duration: 3000
    //   }).present();
    // }
    
    
  }

  isValidInput() {
    return this.account.email != null && this.account.password != null && this.account.email != '' && this.account.password != '';
  }

}
