import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataProvider {

  constructor(public http: Http) {
    console.log('Hello DataProvider Provider');
  }
  getCountryCode() {
    let url = "assets/country_codes.json";
    return new Promise(resolve => {
      this.http.get(url).map(res => res.json()).subscribe(data => {
        resolve(data)
      }, error => {
        let emptyData = [];
        resolve(emptyData);
      });
    });
  }
}
