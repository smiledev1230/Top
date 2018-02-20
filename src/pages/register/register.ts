import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data';
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  public country_list: any;
  public homeland:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider) {
    this.homeland = 'AF';
  }
  
  ionViewDidLoad() {
    let phone_number = this.navParams.get('phone_number');
    console.log(phone_number);
    
    this.dataProvider.getCountryCode().then(response=>{
      this.country_list = response;
      console.log(response);
    });
    
  }

  save() {

  }
  
  nextPage() {
    
  }
}
