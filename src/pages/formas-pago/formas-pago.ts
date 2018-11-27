import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { LoginPage } from '../login/login';
import { InAppBrowser } from '@ionic-native/in-app-browser';
/*
  Generated class for the FormasPago page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-formas-pago',
  templateUrl: 'formas-pago.html'
})
export class FormasPagoPage {

  titulo = 'Formas de Pago WEB';
  slides: String[] = ['assets/img/adventure-cat.png', 'assets/img/gangnamtocat.png', 'assets/img/plumbercat.jpg'];

  cargaTipoSO =''
  formasPagoArray = []
  formaPago: { compania: string, url: string }
  constructor(public navCtrl: NavController, public navParams: NavParams, private plat: Platform,
    public auth: AuthService, private iab: InAppBrowser) {
    this.formasPagoArray.push({ cod: 2, compania: 'La Positiva', url: 'https://docs.google.com/viewerng/viewer?url=https://secure.consejeros.com.pe/Pagos/Home/RenderPDF/2' })
    this.formasPagoArray.push({ cod: 1, compania: 'RIMAC', url: 'https://docs.google.com/viewerng/viewer?url=https://secure.consejeros.com.pe/Pagos/Home/RenderPDF/1' })
    this.formasPagoArray.push({ cod: 3, compania: 'Pacifico', url: 'https://docs.google.com/viewerng/viewer?url=https://secure.consejeros.com.pe/Pagos/Home/RenderPDF/3' })
    this.formasPagoArray.push({ cod: 4, compania: 'MAPFRE', url: 'https://docs.google.com/viewerng/viewer?url=https://secure.consejeros.com.pe/Pagos/Home/RenderPDF/4' })
    if (this.plat.is('ios')) {
      this.cargaTipoSO = '_system'
    }
    else {
      this.cargaTipoSO = '_blank'
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormasPagoPage');
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot(LoginPage)
    });
  }

  irPagos(item) {    
    if (this.plat.is('ios')) {
      const browser = this.iab.create(item.url,'_system')
      //browser.executeScript();
    }
    else {
      window.open(item.url, '_self')
    }
  }
}
