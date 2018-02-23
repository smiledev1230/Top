import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data';
import { AddCardPage } from '../add-card/add-card';
import { HomelandPage } from '../homeland/homeland';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  public country_list: any = [];
  public user:any;
  public country_name:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider) {

  }
  
  ionViewDidLoad() {
    console.log(this.dataProvider.user);
    this.dataProvider.getCountryCode().then(response=>{
      for (let i in response) {
        this.country_list[response[i]['code']] = response[i]['name'];
      }
    });
  }

  sexClick(gender) {
    this.dataProvider.user.gender = gender;
  }
  
  interestClick(value) {
    this.dataProvider.user.interested_in = value;
  }

  homelandClick() {
    this.navCtrl.push(HomelandPage);
  }

  nextPage() {
    this.navCtrl.push(AddCardPage);
  }
}
