import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { KeepPostedPage } from '../keep-posted/keep-posted';
@Component({
  selector: 'page-passenger',
  templateUrl: 'passenger.html',
})
export class PassengerPage {
  private passengers: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.passengers = [
      'Boost my profile',
      'Optimize my best photos',
      'Get extra undo to change your mind',
      'Read receipts',
      'Get unlimited supertop swips',
      'Get on top search when in your destination'
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PassengerPage');
  }

  passengerSelected(passenger) {

  }

  payNow() {
    this.navCtrl.push(KeepPostedPage);
  }

  nextPage() {
    this.navCtrl.push(KeepPostedPage);
  }
}
