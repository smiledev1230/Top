import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {
  private locations: any = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let temp = {
      name: 'Disney Land',
      position: '309 Frances Meadows Suite 510'
    }
    for (let i=0; i<20; i++) {
      this.locations.push(temp);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationPage');
  }

}
