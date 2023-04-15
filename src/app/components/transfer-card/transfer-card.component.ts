import { Component, Input, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { BankApiService } from "../../services/bankApi/bank-api.service";

@Component({
  selector: "app-transfer-card",
  templateUrl: "./transfer-card.component.html",
  styleUrls: ["./transfer-card.component.scss"],
})
export class TransferCardComponent {
  transferRecipient: string;
  @Input()
  transferAccountNumber: string;
  @Input()
  transferBankName: string;
  transferAmount: number;
  name: string;

  constructor(
    private modalCtrl: ModalController,
    private bankApiService: BankApiService
  ) {}

  cancel() {
    // close the modal
    return this.modalCtrl.dismiss(null, "cancel");
  }

  confirm() {
    // change to transfer page
    return this.modalCtrl.dismiss(this.name, "confirm");
  }

  ngOnInit() {
    //set the name of the recipient
  }
}
