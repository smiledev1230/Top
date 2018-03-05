import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddCardPage } from '../add-card/add-card';
import { AirlinePage } from '../airline/airline';
import { DataProvider } from '../../providers/data';

@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {
  private description: any;
  private userImage: any;
  private photo0: any;
  private photo1: any;
  private photo2: any;
  private photo3: any;
  private photo4: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider) {
    this.userImage ="assets/imgs/home/home-woman.png";
    this.photo0 = this.photo1 = this.photo2 = this.photo3 = "assets/imgs/plus.png";
    this.description = this.dataProvider.user.user_description;
    if (!this.description) this.description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPage');
  }

  chooseAirline() {
    this.navCtrl.push(AirlinePage);
  }

  edit() {
    this.navCtrl.pop();
  }

  smokingClick(is_smoking) {
    this.dataProvider.user.is_smoking =  is_smoking;
  }

  uploadCard() {
    this.navCtrl.push(AddCardPage);
  }

}
