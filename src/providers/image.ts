import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { LoadingProvider } from './loading';

@Injectable()
export class ImageProvider {

  private photoMessageOptions: CameraOptions = {
    quality: 50,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    correctOrientation: true
  };

  constructor(public camera: Camera, public loadingProvider: LoadingProvider) {
    console.log('Hello ImageProvider Provider');
  }

  uploadPicture(sourceType): Promise<any> {
    return new Promise(resolve => {
      this.photoMessageOptions.sourceType = sourceType;
      this.loadingProvider.show();
      // Get picture from camera or gallery.
      this.camera.getPicture(this.photoMessageOptions).then((imageData) => {
        // Process the returned imageURI.
        console.log(imageData);
        this.loadingProvider.hide();
        resolve(imageData);
      }).catch((error) => {
        console.log(error);
        this.loadingProvider.hide();
      });
    });
  }  
}
