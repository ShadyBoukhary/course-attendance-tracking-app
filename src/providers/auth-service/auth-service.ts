import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { LoginResponse } from '../../models/login/login-response.interface';
import { Account } from '../../models/account/account.interface';


/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  constructor(private auth: AngularFireAuth, private data: AngularFireDatabase) {
    console.log('Hello AuthServiceProvider Provider');
  }

  async signInWithEmailAndPassword(account: Account) {

    try {
      return <LoginResponse> {
        result: await this.auth.auth.signInWithEmailAndPassword(account.email, account.password)
      };
    }
    catch(e){
      return <LoginResponse> {
        error: e
      };
    }
    
  }

  async createUserWithEmailAndPassword(account: Account) {
    try {
      return <LoginResponse> {
        result: await  this.auth.auth.createUserWithEmailAndPassword(account.email, account.password)
      };
    }
    catch(e){
      return <LoginResponse> {
        error: e
      };

    }
  }

  async resetPassword(email: string) {
    try {
      await this.auth.auth.sendPasswordResetEmail(email);
    }  catch (e) {
      console.log(e);
      throw e;
    }
  }

  getAutenticatedUser() {
    //this.data.database.goOnline();
    console.log(this.auth.authState);
    return this.auth.authState;
  }

  signOut() { 
    this.auth.auth.signOut();
  }

}
