import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, Platform } from 'ionic-angular';
import { PassengerPage } from '../passenger/passenger';
import { DataProvider } from '../../providers/data';
@Component({
  selector: 'page-add-card',
  templateUrl: 'add-card.html',
})
export class AddCardPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider, public actionSheet: ActionSheetController, public plt: Platform) {

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
            console.log("take photo");
          }
        },{
          text: 'Photo Library',
          icon: 'image',
          handler: () => {
            console.log("Video");
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
