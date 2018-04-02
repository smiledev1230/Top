import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { ConfigProvider } from './config';
import { DataProvider } from './data';
import { Platform } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class RestServiceProvider {

  private contentHeader = new Headers({
    "Content-Type": "application/x-www-form-urlencoded"
  });
  private apiParams = {
    stage: 0,
    version: 1.0,
    platform: 'ios'
  }
  constructor(public http: Http, public config: ConfigProvider, public platform: Platform, public dataProvider: DataProvider) {
    console.log('Hello RestServiceProvider');
    platform.ready().then(() => {
      if(this.platform.is('android')) {
        this.apiParams.platform = 'android';
      }
    });
  }

  getUser() {
    let params = this.apiParams;
    return params;
  }

  registerPhone(phone_number) {
    let params = this.apiParams;
    params.stage = 1;
    params['phone_number'] = phone_number;
    return params;
  }
  
  validateSMS(sms_code) {
    let params = this.apiParams;
    params.stage = 2;
    params['phone_number'] = this.dataProvider.user.phone_number;
    params['sms_code'] = sms_code;
    return params;
  }

  getHttp(bodyData): Promise<any> {
    let paramData = new URLSearchParams();
    for(let key in bodyData){
      paramData.set(key, bodyData[key]);
    }
    let params = {
      headers: this.contentHeader,
      body: paramData.toString()
    };
    return new Promise(resolve => {
      this.http.post(this.config.apiUrl, JSON.stringify(params), params).map(res => res.json()).subscribe(response => {
        resolve(response);
       }, error => {
        console.log(error);// Error getting the data
        resolve('');
      });
    });
  }
}
