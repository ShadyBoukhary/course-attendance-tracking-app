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
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    private auth: AuthServiceProvider) {
    
    
    this.x = 0;
    console.log('In construpctor');
    this.authUser$ = this.auth.getAutenticatedUser().subscribe(auth => {

      if (this.x === 0) {

        if (!auth) {
          this.rootPage = 'LoginPage';
          console.log('Not Authenticated');
        }
        else {
          this.rootPage = 'HomePage';
          console.log('Authenticated');
        }
        this.x++;
        console.log(this.x);
      }

      else {
        this.authUser$.unsubscribe();
      }
    })
    
    
    
    
    
    
    
    
    
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

