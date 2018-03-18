import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, Platform } from 'ionic-angular';
import { PassengerPage } from '../passenger/passenger';
import { DataProvider } from '../../providers/data';
import { ImageProvider } from '../../providers/image';
import { Camera } from '@ionic-native/camera';

@Component({
  selector: 'page-add-card',
  templateUrl: 'add-card.html',
})
export class AddCardPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider, public actionSheet: ActionSheetController, public plt: Platform, public imageProvider: ImageProvider, public camera: Camera) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCardPage');
  }

  attach() {
    if (this.plt.is('ios') || this.plt.is('android')) {
      let messageMenu = this.actionSheet.create({
        title: '',
        buttons: [{
          text: 'Camera',
          icon: 'camera',
          handler: () => {
            console.log("Camera");
            this.imageProvider.uploadPicture(this.camera.PictureSourceType.CAMERA).then((url) => {
              console.log(url);
              this.dataProvider.user.employee_card = url;
            });
          }
        },{
          text: 'Photo Library',
          icon: 'image',
          handler: () => {
            console.log("Photo Library");
            this.imageProvider.uploadPicture(this.camera.PictureSourceType.PHOTOLIBRARY).then((url) => {
              console.log(url);
              this.dataProvider.user.employee_card = url;
            });
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log("cancelled");
          }
        }]
      });
      messageMenu.present();
      messageMenu.onDidDismiss((data)=>{
        
      });
    }
  }

  nextPage() {
    this.navCtrl.push(PassengerPage);
  }
}
