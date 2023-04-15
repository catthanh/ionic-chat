import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-chat-box",
  templateUrl: "./chat-box.component.html",
  styleUrls: ["./chat-box.component.scss"],
})
export class ChatBoxComponent implements OnInit {
  @Input() chat: any;
  @Input() current_user_id: any;
  transferInfoDetected = false;

  constructor() {}

  ngOnInit() {
    console.log("chat: ", this.chat);
    let accountNumberPattern = /\d{9,14}/m;
    let accountNumber = this.chat.message.match(accountNumberPattern);
    if (accountNumber) {
      this.transferInfoDetected = true;
    }
  }
}
