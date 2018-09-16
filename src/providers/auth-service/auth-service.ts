import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../../models/login/login-response.interface';
import { Account } from '../../models/account/account.interface';
import { Storage } from '@ionic/storage';
import { APIConstants, StorageConstants } from '../constants';


@Injectable()
export class AuthServiceProvider {

  userId: String;
  constructor(private http: HttpClient, private storage: Storage) {
    this.userId = null;
  }

  async login(account: Account) {

    var header = { "headers": { "Content-Type": "application/json" } };

    return new Promise((resolve, reject) => {
      this.http.post(`${APIConstants.baseUrl}${APIConstants.loginUrl}`, JSON.stringify(account), header)
        .subscribe((dat: LoginResponse) => {
          console.log(dat);
          this.userId = dat.userId as string;
          console.log(StorageConstants.USER_ID_KEY);
          console.log(StorageConstants.AUTHENTICATED);
          console.log(this.userId);
          this.storage.set(StorageConstants.USER_ID_KEY, this.userId);
          this.storage.set(StorageConstants.AUTHENTICATED, true);

          resolve(dat);
        },
          error => {
            console.log(error);
            if (error.status === 401) {
              reject("Wrong email or password.")
            }
            reject(error.message);
          });
    });
  }

  signUp() {
    var data = {
      "email": "test@test.com",
      "password": "12345",
      "firstName": "Shady",
      "lastName": "Boukhary",
      "department": "cmps",
      "title": "student",
      "phone": "234213",
      "office": "232"

    };

    var header = { "headers": { "Content-Type": "application/json" } };

    return new Promise((resolve, reject) => {
      this.http.post(`${APIConstants.baseUrl}${APIConstants.signUpUrl}`, data, header)
        .subscribe(dat => {
          console.log(dat);
          if (dat.status === '400') {
            reject(dat.message);
          }
          resolve(dat);
        },
          error => {
            console.log(error);
            reject(error.message);
          });
    });
  }

  async getCurrentUser() {
    if (this.userId === null) {
      try {
        let uid = await this.storage.get(StorageConstants.USER_ID_KEY);
        console.log(uid);
        return uid;
      } catch (e) {
        console.log(e);
        throw e;
      }
    } else {
      return this.userId;
    }
  }

  async isAuthenticated() {
    try {
      let auth = await this.storage.get(StorageConstants.AUTHENTICATED);
      if (auth === null) {return false;}
      return auth;
    } catch(e) {
      console.log(e);
      return false;
    }
  }





}
