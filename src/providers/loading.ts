import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

@Injectable()
export class LoadingProvider {
  // Loading Provider
  private spinner = {
    spinner: 'circles'
  };
  private loading;
  constructor(public loadingController: LoadingController) {
    console.log("Initializing Loading Provider");
  }

  //Show loading
  show() {
    if (!this.loading) {
      this.loading = this.loadingController.create(this.spinner);
      this.loading.present();
    }
  }

  //Hide loading
  hide() {
    if (this.loading) {
      this.loading.dismiss();
      this.loading = null;
    }
  }
}
