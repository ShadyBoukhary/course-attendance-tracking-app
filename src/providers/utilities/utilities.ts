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

  createLoading(message: string) {
    return this.loading.create({
      content: message,
      spinner: 'crescent'
    });
  }

  createToast(message: string, duration: number) {
    return this.toast.create({
      message: message,
      duration: duration
    });
  }

}
