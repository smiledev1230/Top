import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, Platform } from 'ionic-angular';
import { AddCardPage } from '../add-card/add-card';
import { HomelandPage } from '../homeland/homeland';
import { DataProvider } from '../../providers/data';
import { ImageProvider } from '../../providers/image';
import { Camera } from '@ionic-native/camera';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  public country_list: any = [];
  public user:any;
  public country_name:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider, public actionSheet: ActionSheetController, public plt: Platform, public imageProvider: ImageProvider, public camera: Camera) {

  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  sexClick(gender) {
    this.dataProvider.user.gender = gender;
  }
  
  interestClick(value) {
    this.dataProvider.user.interested_in = value;
  }

  homelandClick() {
    this.navCtrl.push(HomelandPage);
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
              this.dataProvider.user.​pictures[0] = url;
            });
          }
        },{
          text: 'Photo Library',
          icon: 'image',
          handler: () => {
            console.log("Photo Library");
            this.imageProvider.uploadPicture(this.camera.PictureSourceType.PHOTOLIBRARY).then((url) => {
              console.log(url);
              this.dataProvider.user.​pictures[0] = url;
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
    this.navCtrl.push(AddCardPage);
  }
}
