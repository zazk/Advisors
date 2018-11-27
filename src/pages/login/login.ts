import { Component } from '@angular/core';
import { MenuController, NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';
import { RegisterPage } from '../register/register'
import { ForgottenPassPage } from '../forgotten-pass/forgotten-pass'
import { AuthService } from '../../providers/auth-service'
import { GlovalVars } from '../../providers/gloval-vars'
import { HomePage } from '../home/home'
import { Componentes } from '../../models/componentes'
import { Usuario } from '../../models/usuario'
import { Token } from '../../models/token'
import { Error } from '../../models/error'

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
declare var Connection;

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public usuario: Usuario[];
  loading: Loading;
  onDevice: boolean;

  token: Token[];
  errorServ: Error[];
  registerCredentials = { usuario: '', password: '' };

  loginCredentials = { grant_type: 'password', username: '', password: '', client_id: 'MobileApp', client_secret: 'mobile@consejeros.com.pe' };

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController
    , private loadingCtrl: LoadingController, private auth: AuthService
    , private menu: MenuController, public vars: GlovalVars) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.menu.swipeEnable(false);
  }

  public createAccount() {
    this.navCtrl.push(RegisterPage)
  }

  public forgotAccount() {
    this.navCtrl.push(ForgottenPassPage)
  }

  public login() {
    
          this.navCtrl.setRoot(HomePage)
       
  }


  
}
