import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, ViewController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { Componentes } from '../../models/componentes'
import { GlovalVars } from '../../providers/gloval-vars'
/*
  Generated class for the ContactoPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-contacto',
  templateUrl: 'contacto.html'
})

export class ContactoPage {
  @ViewChild('myInput') myInput: ElementRef;
  data = { Usuario: '', DocumentoIdentidad : '', Remitente: '', Asunto: '', Mensaje: '' }
  telefonos: [{ ciudad, numero, concatenado }]
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthService,
    private alertCtrl: AlertController, private loadingCtrl: LoadingController, public vars: GlovalVars,
    public viewCtrl: ViewController) {
      this.telefonos = [{ ciudad: '', numero: '', concatenado: '' }]
    this.telefonos.pop();
    this.telefonos.push({ ciudad: 'Lima', numero: '(01) 200 4 200', concatenado: 'Lima (01) 200 4 200' });
    this.telefonos.push({ ciudad: 'Arequipa', numero: '(054) 38 03 03', concatenado: 'Arequipa (054) 38 03 03' });
    this.telefonos.push({ ciudad: 'Tacna', numero: '(052) 42 82 82', concatenado: 'Tacna (052) 42 82 82' });
    this.telefonos.push({ ciudad: 'Ilo', numero: '(053) 48 28 36', concatenado: 'Ilo (053) 48 28 36' });
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactoPagePage');
    this.data.Remitente ='mail@cia.com';
    this.data.DocumentoIdentidad = this.vars.getUsuario().userName;
    this.data.Usuario = this.vars.getUsuario().Nombres;
  }
  resize() {
    this.myInput.nativeElement.style.height = this.myInput.nativeElement.height + 'px';
  }
  
  Enviar(){
    var comp = new Componentes(this.alertCtrl, this.navCtrl);
    if (this.data.Asunto === '' || this.data.Mensaje === '') {
      comp.showPopup("Error", "Complete todos los campos para continuar.");
    }else{      
      
    }
  }

}