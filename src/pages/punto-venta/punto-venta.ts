import { Component, ElementRef, ViewChild } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { ConnectivityService } from "../../providers/connectivity-service";
import { Geolocation } from "@ionic-native/geolocation";
import { AuthService } from "../../providers/auth-service";
import { GlovalVars } from "../../providers/gloval-vars";
import { LoginPage } from "../login/login";

/*
  Generated class for the PuntoVenta page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
declare var google;

@Component({
  selector: "page-punto-venta",
  templateUrl: "punto-venta.html"
})
export class PuntoVentaPage {
  @ViewChild("map") mapElement: ElementRef;

  map: any;
  mapInitialised: boolean = false;
  apiKey: any;
  gMarker: any;
  gMarkerConfig: any;
  dataPosition = { latitud: 0, longitud: 0 };

  //markerModel = new google.maps.Marker({})
  markersPuntoVenta = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public connectivityService: ConnectivityService,
    public auth: AuthService,
    public vars: GlovalVars,
    public geo: Geolocation
  ) {
    var pv1 = {
      canal: "CONSEJEROS Y CORREDORES DE SEGUROS AREQUIPA",
      agencia: "Mercaderes",
      telefono: "2134567",
      latitud: -16.399232,
      longitud: -71.534383,
      logo: "http://www.consejeros.com.pe/ImagenesAsset/caja_ico.png",
      icono: "http://www.consejeros.com.pe/ImagenesAsset/caja_ico.png",
      direccion: "calle x 123141",
      horarios: "L-V : 8am 8 pm"
    };
    var pv2 = {
      canal: "Financiera Confianza",
      agencia: "Ag arequipa",
      telefono: "2134567",
      latitud: -16.3978104,
      longitud: -71.5347888,
      logo: "http://www.consejeros.com.pe/ImagenesAsset/fc_ico.png",
      icono: "http://www.consejeros.com.pe/ImagenesAsset/fc_ico.png",
      direccion: "calle x 123141",
      horarios: "L-V : 8am 8 pm"
    };
    var pv3 = {
      canal: "Caja Arequipa",
      agencia: "San Camilo",
      telefono: "2134567",
      latitud: -16.402392,
      longitud: -71.535588,
      logo: "http://www.consejeros.com.pe/ImagenesAsset/caja_ico.png",
      icono: "http://www.consejeros.com.pe/ImagenesAsset/caja_ico.png",
      direccion: "calle x 123141",
      horarios: "L-V : 8am 8 pm"
    };
    var pv4 = {
      canal: "Caja Arequipa",
      agencia: "X",
      telefono: "2134567",
      latitud: -16.399232,
      longitud: -71.535588,
      logo: "http://www.consejeros.com.pe/ImagenesAsset/caja_ico.png",
      icono: "http://www.consejeros.com.pe/ImagenesAsset/caja_ico.png",
      direccion: "calle x 123141",
      horarios: "L-V : 8am 8 pm"
    };
    this.markersPuntoVenta.push(pv1);
    this.markersPuntoVenta.push(pv2);
    this.markersPuntoVenta.push(pv3);
    this.markersPuntoVenta.push(pv4);
    this.loadGoogleMaps();
    this.apiKey = this.vars.getApiKeyMAps();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad PuntoVentaPage");
  }

  loadGoogleMaps() {
    this.addConnectivityListeners();

    if (typeof google == "undefined" || typeof google.maps == "undefined") {
      console.log("Google maps JavaScript needs to be loaded.");
      this.disableMap();

      if (this.connectivityService.isOnline()) {
        console.log("online, loading map");

        //Load the SDK
        window["mapInit"] = () => {
          this.initMap();
          this.enableMap();
        };

        let script = document.createElement("script");
        script.id = "googleMaps";

        if (this.apiKey) {
          script.src =
            "http://maps.google.com/maps/api/js?key=" +
            this.apiKey +
            "&callback=mapInit";
          console.log("usando apikey " + this.apiKey);
        } else {
          script.src = "http://maps.google.com/maps/api/js?callback=mapInit";
        }

        document.body.appendChild(script);
      }
    } else {
      if (this.connectivityService.isOnline()) {
        this.initMap();
        this.enableMap();
      } else {
        this.disableMap();
      }
    }
  }

  initMap() {
    this.mapInitialised = true;

    this.geo.getCurrentPosition().then(
      position => {
        let latLng = new google.maps.LatLng(
          position.coords.latitude,
          position.coords.longitude
        );
        let mapOptions = {
          center: latLng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(
          this.mapElement.nativeElement,
          mapOptions
        );
      },
      error => {
        console.log(error);
      }
    );
  }

  //attachInfoWindow(marker, ){}

  disableMap() {
    console.log("disable map");
  }

  enableMap() {
    console.log("enable map");
  }

  addConnectivityListeners() {
    let onOnline = () => {
      setTimeout(() => {
        if (typeof google == "undefined" || typeof google.maps == "undefined") {
          this.loadGoogleMaps();
        } else {
          if (!this.mapInitialised) {
            this.initMap();
          }

          this.enableMap();
        }
      }, 2000);
    };

    let onOffline = () => {
      this.disableMap();
    };

    document.addEventListener("online", onOnline, false);
    document.addEventListener("offline", onOffline, false);
  }
  public logout() {
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot(LoginPage);
    });
  }
}
