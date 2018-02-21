import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

  nextPage() {

  }
}
