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
  extraFields: Array<number> = [];
  extraFieldsCounter: number = 0;
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
  addField() {
    this.extraFieldsCounter++;
    this.extraFields.push(this.extraFieldsCounter);
  }
  removeField(index) {
    const shouldRemove = confirm("Está seguro que desea eliminar este correo?");
    if (shouldRemove) {
      this.extraFields = this.extraFields.filter(ix => ix !== index);
    }
  }
}
