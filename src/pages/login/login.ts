import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { Account } from '../../models/account/account.interface';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoginResponse } from '../../models/login/login-response.interface';
import { UtilitiesProvider } from '../../providers/utilities/utilities';

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

  /**
   *
   *
   * @memberof LoginPage
   */
  async login() {
    let load = this.utilities.createLoading('Logging in...');
    if (this.isValidInput()) {
      load.present();
      try {
        let data: LoginResponse = await this.auth.login(this.account);

        // if profile not set up yet
        if (data.firstName === '') {
          this.navCtrl.setRoot('EditProfilePage');
        } else {
          this.navCtrl.setRoot('CoursesPage');
        }
        
      } catch(e) {
        console.log(e);
        this.utilities.createToast(e, 3000).present();
      }
      load.dismiss();
    } else {
      this.utilities.createToast('Email or password cannot be empty.', 3000).present();
    }
    
  }

  isValidInput() {
    return this.account.email != null && this.account.password != null && this.account.email != '' && this.account.password != '';
  }

}
