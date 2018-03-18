import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataProvider {
  public user = {
    phone_number: '',
    fname: '',
    lname: '',
    gender: 1,
    interested_in: 1,
    birthdate: new Date().toISOString(),
    country_code: 'AF',
    country: '+93',
    age: 0,
    ​payment_success: 0,
    ​push_access: 0,
    ​push_token: '',
    ​device_type: '',
    ​employee_card: '',
    ​pictures: [],
    ​user_geolocation_city: 'Afghanistan',
    ​user_geolocation_range: 20,
    user_geolocation_lng: 0,
    user_geolocation_lat: 0,
    user_age_range_min: 10,
    user_age_range_max: 80,
    ​user_avalibility: 0,
    ​user_preview_only_verified: 0,
    ​airline: 1,
    ​user_description: '',
    ​is_smoking: 1
  }

  public country_list: any = [];
  public airline_list: any = [];
  public lat: any;
  public long: any;
  public range: any = 50;

  constructor(public http: Http) {
    console.log('Hello DataProvider Provider');
    this.getAirlineList();
  }

  initUser() {
    this.user = {
      phone_number: '',
      fname: '',
      lname: '',
      gender: 1,
      interested_in: 1,
      birthdate: new Date().toISOString(),
      country_code: 'AF',
      country: '+93',
      age: 0,
      ​payment_success: 0,
      ​push_access: 0,
      ​push_token: '',
      ​device_type: '',
      ​employee_card: '',
      ​pictures: [],
      ​user_geolocation_city: 'Afghanistan',
      ​user_geolocation_range: 0,
      user_geolocation_lng: 0,
      user_geolocation_lat: 0,
      user_age_range_min: 0,
      user_age_range_max: 100,
      ​user_avalibility: 0,
      ​user_preview_only_verified: 0,
      ​airline: 1,
      ​user_description: '',
      ​is_smoking: 1
    }
  }

  getCountryCode() {
    let url = "assets/country_codes.json";
    this.http.get(url).map(res => res.json()).subscribe(data => {
      this.country_list = data;
    }, error => {
      console.log(error);
      this.country_list = [];
    });
  }

  getSelectedCode(code) {
    for (let i in this.country_list) {
      if (this.country_list[i]['code'] == code) {
        let selectedCode = {
          name: this.country_list[i]['name'],
          dial_code: this.country_list[i]['dial_code']
        }
        return selectedCode;
      }
    }
    return this.country_list[0];
  }

  getAirlineList() {
    for (let i=1; i<20; i++) {
      let temp = {
        id: i,
        name: 'Emirates',
        icon: '/assets/imgs/Emirates.png'
      }
      this.airline_list.push(temp);
    }
  }
}
