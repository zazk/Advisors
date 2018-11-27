import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { Token } from "../models/token";
import { Network } from "@ionic-native/network";

/*
  Generated class for the GlovalVars provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
declare var Connection;

@Injectable()
export class GlovalVars {
  myUser: string;
  usuario: Token;

  private serviciosWebRoot = "https://ccsonline.consejeros.com.pe/Service/"; //'http://10.1.0.166/OficinaOnlineApi/Service/'; //
  private telefonoCCS = "051959258319";
  private apiKeyMaps = "AIzaSyDuULE-3jh8rUFc9PB70F0d9KRsB9wVMnk";

  onDevice: boolean;

  public msjSinConexionAServicios =
    "Por el momento no podemos procesar su solicitud.";

  constructor(public http: Http, public network: Network) {
    console.log("Hello GlovalVars Provider");
  }

  public setMyGlobalVar(value) {
    this.myUser = value;
  }

  public getMyGlobalVar() {
    return this.myUser;
  }

  public getServicioWeb() {
    return this.serviciosWebRoot;
  }

  // GET SET usuario
  public getUsuario() {
    return this.usuario;
  }

  public setUsuario(user) {
    this.usuario = user;
  }
  //

  //GET Token
  public getToken() {
    return this.usuario.access_token;
  }

  //GET TokenType
  public getTokenType() {
    return this.usuario.token_type;
  }

  //GET NumDocumento
  public getUsername() {
    return this.usuario.userName;
  }

  ////////////////////   VALIDADOR DE CONEXION  ///////////////

  //  Conectado a internet
  public isOnline(): boolean {
    if (this.onDevice && this.network.onConnect) {
      return this.network.onConnect !== Connection.NONE;
    } else {
      return navigator.onLine;
    }
  }

  //  No Conectado a internet
  public isOffline(): boolean {
    if (this.onDevice && this.network.onConnect) {
      return this.network.onConnect === Connection.NONE;
    } else {
      return !navigator.onLine;
    }
  }

  ////////////////////   TELEFONO MOVIL PARA LLAMADAS  / ////////
  public getTelefonoCCS(): string {
    return this.telefonoCCS;
  }

  ////////////////////   TELEFONO MOVIL PARA LLAMADAS  / ////////
  public getApiKeyMAps(): string {
    return this.apiKeyMaps;
  }
}
