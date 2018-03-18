import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { DataProvider } from '../../providers/data';
import { LoginProvider } from '../../providers/login';
import { Geolocation } from '@ionic-native/geolocation';
import { Observable } from "rxjs/Observable";

declare var google;
@Component({
  selector: 'page-change-location',
  templateUrl: 'change-location.html',
})
export class ChangeLocationPage {
  @ViewChild('map') mapElement: ElementRef;
  @ViewChild("searchbar", { read: ElementRef }) searchbar: ElementRef;
  addressElement: HTMLInputElement = null;
  public search: boolean = false;
  public map: any;
  public searchCity: any;
  private searchWord: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider, public viewCtrl: ViewController, public geolocation: Geolocation) {
    // this.mylocation();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangeLocationPage');
    this.loadMap(-34.9290, 138.6010);
    this.getPostion();
  }

  getPostion() {
    this.geolocation.getCurrentPosition().then((position) => {
      this.dataProvider.lat = position.coords.latitude;
      this.dataProvider.long = position.coords.longitude;
      this.myPosition();
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  myPosition(){
    this.loadMap(this.dataProvider.lat, this.dataProvider.long);
    this.initAutocomplete();
    console.log(this.dataProvider.range);
  }

  initAutocomplete(): void {
    // reference : https://github.com/driftyco/ionic/issues/7223
    this.addressElement = this.searchbar.nativeElement.querySelector(
      ".searchbar-input"
    );
    this.createAutocomplete(this.addressElement).subscribe(location => {
      console.log("Searchdata", location);
      let options = {
        center: location,
        zoom: 10
      };
      this.map.setOptions(options);
      this.myPosition();
    });
  }

  createAutocomplete(addressEl: HTMLInputElement): Observable<any> {
    const autocomplete = new google.maps.places.Autocomplete(addressEl);
    autocomplete.bindTo("bounds", this.map);
    return new Observable((sub: any) => {
      google.maps.event.addListener(autocomplete, "place_changed", () => {
        const place = autocomplete.getPlace();
        if (!place.geometry) {
          sub.error({
            message: "Autocomplete returned place with no geometry"
          });
        } else {
          console.log("Search Lat", place.geometry.location.lat());
          console.log("Search Lng", place.geometry.location.lng());
          this.dataProvider.lat = place.geometry.location.lat();
          this.dataProvider.long = place.geometry.location.lng();
          sub.next(place.geometry.location);
          //sub.complete();
        }
      });
    });
  }

  changeRange(range){
    console.log(range);
    this.dataProvider.range = range ;
    this.myPosition(); 
  }

  loadMap(lat, lng) {
    let latLng = new google.maps.LatLng(lat, lng);
    let mapOptions = {
        center: latLng,
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.addMarker(lat, lng);
    this.viewCircle();
  }

  viewCircle() {
    var amsterdam = new google.maps.LatLng(this.dataProvider.lat , this.dataProvider.long);
    var cityCircle = new google.maps.Circle({
      strokeColor: '#21c055',
      strokeOpacity: 0.5,
      strokeWeight: 1,
      fillColor: '#21c055',
      fillOpacity: 0.2,
      center: amsterdam,
      radius: this.dataProvider.range * 100
    });

    cityCircle.setMap(this.map);
  }

  addMarker(lat, lng) {
    // var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
    var marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: {lat: lat, lng: lng},
      // icon: image,
    });

    this.addInfoWindow(marker, "Location");
  }

  addInfoWindow(marker, content) {
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
    google.maps.event.addListener(marker, 'click', () => {
        infoWindow.open(this.map, marker);
    });
  }

  cancel() {
    this.searchWord = '';
    this.ionViewDidLoad();
  }

  saveLocation() {
    this.navCtrl.pop();
  }
}