import { Component, ElementRef, ViewChild } from "@angular/core";
import {
  NavController,
  NavParams,
  AlertController,
  MenuController,
  Events,
  LoadingController
} from "ionic-angular";
import { ConnectivityService } from "../../providers/connectivity-service";
import { Geolocation } from "@ionic-native/geolocation";
import { Componentes } from "../../models/componentes";
import { AuthService } from "../../providers/auth-service";
import { GlovalVars } from "../../providers/gloval-vars";
import { LoginPage } from "../login/login";

/*
  Generated class for the Siniestro page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

declare var google;
declare var window;

@Component({
  selector: "page-siniestro",
  templateUrl: "siniestro.html"
})
export class SiniestroPage {
  @ViewChild("map") mapElement: ElementRef;

  map: any;
  mapInitialised: boolean = false;
  apiKey: any;
  data = { usuario: "", tipoComunicacion: "", longitud: "", latitud: "" };
  dataUsuario = { usuario: "" };
  codReportSiniestro = { llamar: "", mellama: "" };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public connectivityService: ConnectivityService,
    public alertCtrl: AlertController,
    public vars: GlovalVars,
    public auth: AuthService,
    public menu: MenuController,
    private events: Events,
    private loadingCtrl: LoadingController,
    public geo: Geolocation
  ) {
    this.loadGoogleMaps();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SiniestroPage");
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
        } else {
          script.src = "http://maps.google.com/maps/api/js?callback=mapInit";
        }
        document.body.appendChild(script);
      }
    } else {
      if (this.connectivityService.isOnline()) {
        console.log("showing map");
        this.initMap();
        this.enableMap();
      } else {
        console.log("disabling map");
        this.disableMap();
      }
    }
  }

  initMap() {
    this.mapInitialised = true;
    this.geo.getCurrentPosition().then(position => {
      this.setPosition(position.coords.latitude, position.coords.longitude);
    });
  }

  setPosition(latitud, longitud) {
    let latLng = new google.maps.LatLng(latitud, longitud);
    console.log(latitud);
    console.log(longitud);
    let mapOptions = {
      center: latLng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

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

  llamame() {}

  llamar() {}

  openMenu(evt) {
    console.log(evt);
    if (this.menu.open("menuHistorialSiniestro")) {
    } else {
      console.log("close");
    }
  }

  public logout() {
    this.menu.enable(false, "menuHistorialSiniestro");
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot(LoginPage);
    });
  }
}
