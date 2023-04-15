import { Component, Input, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { TransferCardComponent } from "../transfer-card/transfer-card.component";

@Component({
  selector: "app-transfer-button",
  templateUrl: "./transfer-button.component.html",
  styleUrls: ["./transfer-button.component.scss"],
})
export class TransferButtonComponent implements OnInit {
  @Input() hidden: boolean;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: TransferCardComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === "confirm") {
      // this.message = `Hello, ${data}!`;
    }
  }
}
