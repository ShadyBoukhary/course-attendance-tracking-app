import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';

/*
  Generated class for the CameraServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CameraServiceProvider {

  options: CameraOptions;
  constructor(private camera: Camera) {
    console.log('Hello CameraServiceProvider Provider');
    this.options = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.CAMERA,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: false,
      allowEdit: false,
      correctOrientation: true,
      targetHeight: 1920,
      targetWidth: 1080
    };
  }

  async takePicture() {
    try {
      let imageData = await this.camera.getPicture(this.options);
      console.log(imageData);
      return imageData;
    } catch (e) {
      throw e;
    }

  }

}
