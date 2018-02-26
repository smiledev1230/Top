import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
@Component({
  selector: 'page-location-approval',
  templateUrl: 'location-approval.html',
})
export class LocationApprovalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationApprovalPage');
  }

  goToSetting() {
    this.navCtrl.setRoot(HomePage);
  }
}