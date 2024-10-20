import { Component } from '@angular/core';

export interface Message {
  type: "msg" | "err" | "warn"
  msg: string
  dismisable: boolean
}

@Component({
  selector: 'toaster',
  standalone: true,
  imports: [],
  templateUrl: './toaster.component.html',
  styleUrl: './toaster.component.css'
})
export class ToasterComponent {
  messages_list: Message[] = [];

  public addMessage(mesg: string, dismis: boolean) {
    const message: Message = {
      type: "msg",
      msg: mesg,
      dismisable: dismis
    }
    this.messages_list.push(message);
  }

  public addError(mesg: string, dismis: boolean) {
    const message: Message = {
      type: "err",
      msg: mesg,
      dismisable: dismis
    }
    this.messages_list.push(message);
  }

  public addWarning(mesg: string, dismis: boolean) {
    const message: Message = {
      type: "warn",
      msg: mesg,
      dismisable: dismis
    }
    this.messages_list.push(message);
  }
}
