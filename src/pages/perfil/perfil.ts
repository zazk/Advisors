import { Component } from "@angular/core";
import { NavController, NavParams, ModalController } from "ionic-angular";
import { ModalDatosPage } from "../modal-datos/modal-datos";
import { ModalPasswordPage } from "../modal-password/modal-password";
import { ModalPreguntaPage } from "../modal-pregunta/modal-pregunta";
import { AuthService } from "../../providers/auth-service";
import { LoginPage } from "../login/login";

/*
  Generated class for the Perfil page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: "page-perfil",
  templateUrl: "perfil.html"
})
export class PerfilPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public auth: AuthService
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad PerfilPage");
  }

  openModalDatos() {
    // When you want to open a page in a modal use the next two lines
    // let modal = this.modalCtrl.create(ModalDatosPage);
    // modal.present();

    // If you wanna to push a Page in your navigation use this:
    this.navCtrl.push(ModalDatosPage);
  }

  openModalPassword() {
    let modal = this.modalCtrl.create(ModalPasswordPage);
    modal.present();
  }

  openModalPregunta() {
    let modal = this.modalCtrl.create(ModalPreguntaPage);
    modal.present();
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot(LoginPage);
    });
  }
}
