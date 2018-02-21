import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { KeepPostedPage } from '../keep-posted/keep-posted';
@Component({
  selector: 'page-passenger',
  templateUrl: 'passenger.html',
})
export class PassengerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PassengerPage');
  }

  nextPage() {
    this.navCtrl.push(KeepPostedPage);
  }
}
