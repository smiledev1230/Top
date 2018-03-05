import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data';

@Component({
  selector: 'page-airline',
  templateUrl: 'airline.html',
})
export class AirlinePage {
  public airline_id: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider) {
    this.airline_id = this.dataProvider.user.airline;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AirlinePage');
  }

  selectAirline(id) {
    this.airline_id = this.dataProvider.user.airline = id;
    this.navCtrl.pop();
  }

  goLocation() {
    this.navCtrl.pop();
  }
}
