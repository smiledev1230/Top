import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { InboxPage } from '../inbox/inbox';
import { LocationPage } from '../location/location';
import { TopupPage } from '../topup/topup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
  
  showTopup() {
    this.navCtrl.push(TopupPage);
  }
}