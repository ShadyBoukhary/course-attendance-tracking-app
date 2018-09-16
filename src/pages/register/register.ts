import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Account } from '../../models/account/account.interface';
import { UtilitiesProvider } from '../../providers/utilities/utilities';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  password: string;
  account = {} as Account;
  constructor(public navCtrl: NavController,
    private auth: AuthServiceProvider, private utilities: UtilitiesProvider) {
      this.account = {} as Account;
  } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  async register() {
    let load = this.utilities.createLoading('Creating account...');
    if (this.isValidInput()) {
      if (this.account.password === this.password) {

        if (this.utilities.validateEmail(this.account.email)) {
          load.present();

        // Create Account

        try {

          await this.auth.signUp(this.account);
          this.utilities.createToast('Account created!', 3000).present();
          this.navCtrl.pop();

        } catch(e) {

          this.utilities.createToast(e, 3000).present();
          console.log(e);
        }

        load.dismiss();

        } else { /* Invalid email format */
          this.utilities.createToast('Invalid email format.', 3000).present();
        }
        
      } else { /* Passwords do not match */
        this.utilities.createToast('Passwords do not match.', 3000).present();
      }

    } else {  /* If empty fields  */
      this.utilities.createToast('Email or password cannot be empty.', 3000).present();
    }

  }

  isValidInput() {
    return this.password != null && this.account.email != null && this.account.password != '' && this.password != '' && this.account.email != '' && this.account.password != '';
  }

}
