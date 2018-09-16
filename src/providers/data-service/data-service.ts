import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIConstants, StorageConstants } from '../constants';
import { AuthServiceProvider } from '../auth-service/auth-service';
import { User } from '../../models/user';


@Injectable()
export class DataServiceProvider {

  constructor(public http: HttpClient, private auth: AuthServiceProvider) {
    console.log('Hello DataServiceProvider Provider');
  }


  getUsers() {
    return new Promise((resolve, reject) => {
      this.http.get(`${APIConstants.baseUrl}/23423`)
        .subscribe(dat => {
          console.log(dat);
          resolve(dat);
        },
          error => {
            console.log(error);
            reject(error.message);
          });
    });
  }

  async getUserProfile() {
    let userId = await this.auth.getCurrentUser();
    return new Promise((resolve, reject) => {
      this.http.get(`${APIConstants.baseUrl}${APIConstants.userUrl}/${userId}`)
        .subscribe(dat => {
          if (dat.status === '404') {
            reject(dat.message);
          }
          let user = new User(dat);
          console.log(user);
          resolve(user);
        },
          error => {
            console.log(error);
            reject(error.message);
          });
    });
  }

  async updateUserProfile(user: User) {
    let userId = await this.auth.getCurrentUser();
    console.log(userId);
    let headers = { "headers": { "Content-Type": "application/json" } };
    user.setPhone('9403370543534543586');
    console.log(user);
    return new Promise((resolve, reject) => {
      this.http.put(`${APIConstants.baseUrl}${APIConstants.userUrl}/${userId}`, JSON.stringify(user), headers)
        .subscribe(dat => {
          if (dat.status === '404') {
            reject(dat.message);
          }
          console.log(dat);
          let user = new User(dat);
          console.log(user);
          resolve(user);
        },
          error => {
            console.log(error);
            reject(error.message);
          });
    });
  }


}
