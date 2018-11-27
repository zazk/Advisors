import { Injectable } from "@angular/core";
import { Network } from "@ionic-native/network";
import { Platform } from "ionic-angular";

import "rxjs/add/operator/map";

/*
  Generated class for the ConnectivityService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

// declare var Connection;

@Injectable()
export class ConnectivityService {
  onDevice: boolean;

  constructor(public platform: Platform, public network: Network) {
    console.log("Hello ConnectivityService Provider");
    this.onDevice = this.platform.is("cordova");
  }

  isOnline(): boolean {
    var token: boolean;
    let connected = this.network.onConnect().subscribe(() => {
      console.log("Conectado");
      setTimeout(() => {
        if (this.network.type === "wifi") {
          console.log("Tenemos una conexion wifi");
        }
      }, 2000);
      token = true;
    });
    console.log(connected);
    if (this.onDevice && token) {
      return true;
    } else {
      return true;
    }
    /*
    if(this.onDevice && Network.connection){
      return Network.connection !== Connection.NONE;
    } else {
      return navigator.onLine;
    }*/
  }

  isOffline(): boolean {
    var token: boolean;
    /*let connected = Network.onDisconnect().subscribe(() => {
      console.log('Sin Red');
      token = true

    })*/
    if (this.onDevice && token) {
      return true;
    } else {
      return false;
    }
    /*
    if(this.onDevice && Network.connection){
      return Network.connection === Connection.NONE;
    } else {
      return !navigator.onLine;
    }
    */
  }
}
