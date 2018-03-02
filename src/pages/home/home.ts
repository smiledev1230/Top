import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { InboxPage } from '../inbox/inbox';
import { LocationPage } from '../location/location';
import { TopupPage } from '../topup/topup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  goToProfile() {
    this.navCtrl.push(ProfilePage);
  }
  
  goToInbox() {
    this.navCtrl.push(InboxPage);
  }

  goToLocation() {
    this.navCtrl.push(LocationPage);
  }

  homeRefresh() {
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }

  showTopup() {
    let topupModal = this.modalCtrl.create(TopupPage, {showBackdrop:true, enableBackdropDismiss:false});
    topupModal.present();
    topupModal.onDidDismiss(data => {

      },
    );
  }
}