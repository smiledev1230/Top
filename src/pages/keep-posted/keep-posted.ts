import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LocationApprovalPage } from '../location-approval/location-approval';

@Component({
  selector: 'page-keep-posted',
  templateUrl: 'keep-posted.html',
})
export class KeepPostedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KeepPostedPage');
  }

  keepSelected() {
    this.navCtrl.push(LocationApprovalPage);
  }
  
  nextPage() {
    this.navCtrl.push(LocationApprovalPage);
  }
}
