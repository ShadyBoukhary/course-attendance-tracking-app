import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { FIREBASE_CONFIG } from '../firebase-config/app.firebase.config';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { IonicStorageModule } from '@ionic/storage';



import { MyApp } from './app.component';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { DataServiceProvider } from '../providers/data-service/data-service';
import { CourseDataServiceProvider } from '../providers/data-service/course-data-service';
import { NetworkServiceProvider } from '../providers/network-service/network-service';
import { CameraServiceProvider } from '../providers/camera-service/camera-service';
import { ImageDataServiceProvider } from '../providers/data-service/image-data-service';
import { Camera } from '@ionic-native/camera';
import { UtilitiesProvider } from '../providers/utilities/utilities';
import {FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { AnimatorModule } from 'css-animator';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';



@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IonicStorageModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    AnimatorModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    DataServiceProvider,
    NetworkServiceProvider,
    CameraServiceProvider,
    Camera,
    UtilitiesProvider,
    CourseDataServiceProvider,
    ImageDataServiceProvider,
    File,
    FileTransfer
  ]
})
export class AppModule {}
