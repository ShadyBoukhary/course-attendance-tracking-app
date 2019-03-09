import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Subscription } from 'rxjs/Subscription';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;
  authUser$: Subscription;
  x: number;
  constructor(private platform: Platform, private statusBar: StatusBar, splashScreen: SplashScreen,
    private auth: AuthServiceProvider) {

    this.loadApp().then(() => splashScreen.hide());
  }

  async loadApp() {

    await this.platform.ready();
    this.statusBar.styleDefault();
    await this.authenticate();
  }

  async authenticate() {
    this.rootPage = await this.auth.isAuthenticated() ? 'CoursesPage' : 'LoginPage'; 
  }

}

