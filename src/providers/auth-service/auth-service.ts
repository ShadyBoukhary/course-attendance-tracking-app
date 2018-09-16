import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../../models/login/login-response.interface';
import { Account } from '../../models/account/account.interface';
import { Storage } from '@ionic/storage';
import { APIConstants, StorageConstants } from '../constants';


@Injectable()
export class AuthServiceProvider {

  userId: string;
  constructor(private http: HttpClient, private storage: Storage) {
    this.userId = null;
  }

  /**
   *
   *
   * @param {Account} account
   * @returns
   * @memberof AuthServiceProvider
   */
  async login(account: Account) {

    var header = { "headers": { "Content-Type": "application/json" } };

    return new Promise((resolve, reject) => {
      this.http.post(`${APIConstants.baseUrl}${APIConstants.loginUrl}`, JSON.stringify(account), header)
        .subscribe((dat: LoginResponse) => {
          this.userId = dat.userId as string;
          this.saveLoginData(this.userId, dat.token)
            .then(() => { resolve(dat); })
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

  signUp(account: Account) {
    var data = {
      email: account.email,
      password: account.password,
      firstName: "",
      lastName: "",
      department: "",
      title: "",
      phone: "",
      office: ""
    };

    var header = { "headers": { "Content-Type": "application/json" } };

    return new Promise((resolve, reject) => {
      this.http.post(`${APIConstants.baseUrl}${APIConstants.signUpUrl}`, JSON.stringify(data), header)
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
      if (auth === null) { return false; }
      return auth;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  async getJWT(): Promise<string> {
    let jwt = await this.storage.get(StorageConstants.JSON_WEB_TOKEN);
    return jwt;
  }

  async saveLoginData(userId: string, token: string) {
    await this.storage.set(StorageConstants.USER_ID_KEY, userId);
    await this.storage.set(StorageConstants.AUTHENTICATED, true);
    await this.storage.set(StorageConstants.JSON_WEB_TOKEN, token);
  }





}
