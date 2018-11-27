import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { AuthService } from '../../providers/auth-service';
import { LoginPage } from '../login/login';
import { DetalleSeguro } from '../../models/detalle-seguro'

/*
  Generated class for the DetalleSegurosPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detalle-seguros',
  templateUrl: 'detalle-seguros.html'
})
export class DetalleSegurosPagePage {

  detalle: DetalleSeguro = new DetalleSeguro()
    riesgo: string;

    varTemplateDetalle: SafeUrl;

    constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthService
        , private viewCtrl: ViewController, private sanitizer: DomSanitizer, private loadingCtrl: LoadingController
    ) { }

    ionViewDidLoad() {
        console.log('ionViewDidLoad PagosPage');
        this.getDetalle(this.navParams.get('data'))
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    getDetalle(data) {
        let loader = this.loadingCtrl.create({
            content: "Espere por Favor..."
        });
        loader.present();
        
        //    this.detalle = rpta;
            this.detalle.flagVehicular = true;
            loader.dismiss();
        
    }

    public logout() {
        this.auth.logout().subscribe(succ => {
            this.navCtrl.setRoot(LoginPage)
        });
    }

    templateVehicular = ``;
}
