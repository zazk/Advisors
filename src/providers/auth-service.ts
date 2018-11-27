import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map';
import { Usuario, LoadDataActualizar, Entidad } from '../models/usuario'
import { Compania } from '../models/seguro'
import { Menu } from '../models/menu'
import { CmbRegister, Tipo } from '../models/tipo'
//import { Token } from '../models/token'
import { Error } from '../models/error'
import { DetalleSeguro } from '../models/detalle-seguro'
import { Siniestro } from '../models/siniestro'
import { PuntoVenta } from '../models/punto-venta'
import { GlovalVars } from '../providers/gloval-vars'

/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

export class User {
  nombre: string;
  email: string;

  constructor(name: string, email: string) {
    this.nombre = name;
    this.email = email;
  }
}

@Injectable()
export class AuthService {

  servicioURL = 'http://10.1.0.114/WebServicePrueba/webservice.asmx';
  serviceDadUrl = 'http://10.1.0.166/OficinaOnlineApi/Service/';
  currentUser: User;
  token: string;

  seguro = '[{"id":1,"compania":"RIMAC", "riesgo":"EPS", "nombre":"Planes Médicos EPS","ini_vigencia":"01/01/2017","fin_vigencia":"01/01/2018", '
  + '"cuotas_pend":1, "actualizado":"' + new Date().toISOString() +
  '"}' +
  ',{"id":2,"compania":"RIMAC", "riesgo":"Vehicular", "nombre":"SOAT","ini_vigencia":"06/06/2016","fin_vigencia":"06/06/2017", '
  + '"cuotas_pend":0, "actualizado":"' + new Date().toISOString() +
  '"}' +
  ',{"id":3,"compania":"RIMAC", "riesgo":"Otros", "nombre":"S. C. T. R. Pensión","ini_vigencia":"06/06/2016","fin_vigencia":"--/--/--", '
  + '"cuotas_pend":0, "actualizado":"' + new Date().toISOString() +
  '"}' +
  ']';

  constructor(public http: Http, public global: GlovalVars) {
    console.log('SERVICIOS');
  }


  public getUserInfo(): User {
    return this.currentUser;
  }

  public getPassword(idMovile): number {
    return 1;
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }

}
