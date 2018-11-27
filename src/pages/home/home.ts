import { Component } from '@angular/core';

import { NavController, MenuController} from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { LoginPage } from '../login/login';
import { ContactoPage } from '../contacto/contacto';
import { PerfilPage } from '../perfil/perfil'
import { SegurosPage } from '../seguros/seguros'
import { CotizadorSoatPage } from '../cotizador-soat/cotizador-soat'
import { PuntoVentaPage } from '../punto-venta/punto-venta'
import { FormasPagoPage } from '../formas-pago/formas-pago'
import { AvisoSiniestroPage } from '../aviso-siniestro/aviso.siniestro'
import { GlovalVars } from '../../providers/gloval-vars'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username = '';
  email = '';

  constructor(public navCtrl: NavController, private auth: AuthService, private menuctrl:MenuController,
      public vars:GlovalVars) {
    //let info = this.auth.getUserInfo();
    this.username = 'nombre'
    //this.email = info.email;
    this.menuctrl.swipeEnable(true);
  }

  goPagos(titulo, flag){
    this.navCtrl.setRoot(SegurosPage,{titulo:titulo,flag:flag});
  }
  goPerfil(){
    this.navCtrl.setRoot(PerfilPage);
  }
  goSeguros(titulo, flag){
    this.navCtrl.setRoot(SegurosPage,{titulo:titulo,flag:flag});
  }
  goCotizador(){
    this.navCtrl.setRoot(CotizadorSoatPage);
  }
  goPuntoVentaSOAT(){
    console.log('gopv')
    this.navCtrl.setRoot(PuntoVentaPage);
  }

  goModulo(modulo){
    this.navCtrl.setRoot(AvisoSiniestroPage);
  }

  goFormadePago(){
    this.navCtrl.setRoot(FormasPagoPage);
  }

  goContacto(){
    this.navCtrl.setRoot(ContactoPage);
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot(LoginPage)
    });
  }
}
