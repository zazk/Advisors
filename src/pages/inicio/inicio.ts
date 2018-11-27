import { Component } from '@angular/core';
import { NavController, NavParams, MenuController, ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login'
import { RegisterPage } from '../register/register'
import { AuthService } from '../../providers/auth-service'

/*
  Generated class for the Inicio page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {

  slides: String[] = ['assets/img/1.png', 'assets/img/2.png', 'assets/img/3.png'];

  slids: String[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public menu: MenuController, public auth: AuthService, private toastCtrl: ToastController) {
    this.slids = this.slides;
    
        this.slids = this.slides
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
    this.menu.swipeEnable(false,'menuRoot');
    this.menu.swipeEnable(false,'menuHistorialSiniestro');
  }

  public Ingresar() {
    this.navCtrl.setRoot(LoginPage)
  }

  public createAccount() {
    this.navCtrl.push(RegisterPage)
  }

}
