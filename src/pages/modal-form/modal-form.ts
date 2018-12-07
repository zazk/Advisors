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
  selector: "modal-form",
  templateUrl: "modal-form.html"
})
export class ModalForm {
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
