import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {
  public locations: any = [];
  public location_id: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for (let i=1; i<20; i++) {
      let temp = {
        id: i,
        name: 'Disney Land',
        position: '309 Frances Meadows Suite 51'+i
      }
      this.locations.push(temp);
    }
    this.location_id = 2;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationPage');
  }

  selectLocation(location_id) {
    this.location_id = location_id;
  }

  goLocation() {
    this.navCtrl.pop();
  }
}
