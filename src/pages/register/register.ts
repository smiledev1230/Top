import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data';
import { AddCardPage } from '../add-card/add-card';
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  public country_list: any;
  public user = {
    phone_number: '',
    fname: '',
    lname: '',
    gender: 1,
    interested_in: 1,
    birthdate: new Date().toISOString(),
    country: '',
    photos: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider) {
    this.user.country = 'AF';
  }
  
  ionViewDidLoad() {
    this.user.phone_number = this.navParams.get('phone_number');
    this.dataProvider.getCountryCode().then(response=>{
      this.country_list = response;
    });
  }

  sexClick(gender) {
    this.user.gender = gender;
  }
  
  interestClick(value) {
    this.user.interested_in = value;
  }
  
  nextPage() {
    console.log(this.user);
    this.navCtrl.push(AddCardPage, {'user': this.user});
  }
}
