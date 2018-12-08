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
  selector: "en-llamada",
  templateUrl: "en-llamada.html"
  
})
export class EnLlamada {
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
}
