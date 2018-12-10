import { Component } from "@angular/core";
import {
  NavController,
  ModalController,
  NavParams,
  MenuController,
  ToastController,
  ViewController
} from "ionic-angular";

@Component({
  selector: "estado-cuenta",
  templateUrl: "estado-cuenta.html"
})
export class EstadoCuenta {
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public navParams: NavParams,
    public menu: MenuController,
    public viewCtrl: ViewController,
    private toastCtrl: ToastController
  ) {}
  dismiss() {
    this.viewCtrl.dismiss();
  }
  toggleContent(event) {
    const element = event.currentTarget.parentNode;
    element.classList.toggle("active");
  }
}
