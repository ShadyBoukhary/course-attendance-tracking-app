import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIConstants, StorageConstants } from '../constants';
import { AuthServiceProvider } from '../auth-service/auth-service';
import { User } from '../../models/user';


@Injectable()
export class DataServiceProvider {

  constructor(public http: HttpClient, private auth: AuthServiceProvider) {
    console.log('Hello DataServiceProvider Provider');
  }


  getUsers(): Promise<any> {
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

  /**
   *
   * Gets the profile of the authenticated user
   * @returns {Promise<User>} Promise<User>
   * @memberof DataServiceProvider
   */
  async getUserProfile(): Promise<any> {

    // Get token and userId
    let jwt = await this.auth.getJWT();
    let userId = await this.auth.getCurrentUser();

    // Set Headers
    let headers = new HttpHeaders().set(StorageConstants.JSON_WEB_TOKEN, jwt);

    // Make HTTP Request
    return new Promise((resolve, reject) => {
      this.http.get(`${APIConstants.baseUrl}${APIConstants.userUrl}/${userId}`, {headers: headers})
        .subscribe((dat: any) => {
          if (dat.status === '404') {
            reject(dat.message);
          }
          let user = new User(dat);
          resolve(user);
        },
          error => {
            console.log(error);
            reject(error.message);
          });
    });
  }

  /**
   *
   * Updates the profile of the user
   * @param {User} user
   * @returns {Promise<User>} Promise<User>
   * @memberof DataServiceProvider
   */
  async updateUserProfile(user: User) {

    // Get token and userId
    let jwt = await this.auth.getJWT();
    let userId = await this.auth.getCurrentUser();

    // Set Headers
    let headers = new HttpHeaders().set(StorageConstants.JSON_WEB_TOKEN, jwt);
    headers.set('Content-Type', 'application/json');
    console.log('PARAMS **************');
    console.log(JSON.stringify(user));
    // Make HTTP Request
    return new Promise((resolve, reject) => {
      this.http.put(`${APIConstants.baseUrl}${APIConstants.userUrl}/${userId}`, user, {headers})
        .subscribe((dat: any) => {
          console.log(dat);
          if (dat.status === '404') {
            reject(dat.message);
          }
          let user = new User(dat);
          resolve(user);
        },
          error => {
            console.log(error);
            reject(error.message);
          });
    });
  }


}
