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
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: false,
      allowEdit: false,
      correctOrientation: true,
      targetWidth: 2000
    };
  }

  async takePicture() {
    try {
      let imageData = await this.camera.getPicture(this.options);
      let image = "data:image/jpeg;base64,"+ imageData;
      return image;
    } catch (e) {
      throw e;
    }

  }

}
