import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from 'ionic-angular';

/*
  Generated class for the UtilitiesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UtilitiesProvider {

  constructor(private loading: LoadingController, private toast: ToastController) {
    
  }

  /**
   * Creates a loading dialog
   * @param {string} message
   * @returns LoadingController
   * @memberof UtilitiesProvider
   */
  createLoading(message: string) {
    return this.loading.create({
      content: message,
      spinner: 'crescent'
    });
  }

  /**
   * Creates a toast with a custom message and duration
   * @param {string} message
   * @param {number} duration
   * @returns toast
   * @memberof UtilitiesProvider
   */
  createToast(message: string, duration: number) {
    return this.toast.create({
      message: message,
      duration: duration
    });
  }



  /**
   * Valdiates an email format
   * @param {string} email
   * @returns {boolean} boolean
   * @memberof UtilitiesProvider
   */
  validateEmail(email: string): boolean {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

}

const PURE_EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Passwords should be at least 8 characters long and should contain one number, one character and one special character.
const PASSWORD_REGEXP = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

export const regexValidators = {
  email: PURE_EMAIL_REGEXP,
  password: PASSWORD_REGEXP
};
