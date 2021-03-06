import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `
  <div class="alert alert-success" [ngClass]="{fadeOut: displayNotification}">
    This website uses cookies to provide better user experience.
    <div class="close"><button class="btn" (click)="removeNotification()">X</button></div>
  </div>`, // property binding is done here hidden.
  styles: ["div{margin: 10px 0px; padding: 10px 20px; background-color: #fada0; text-align: center}",
  "p{font-size: 16 px;}",
  ".close{float: right; margin-top: -15px;}",
  ".fadeOut{visibility: hidden; opacity: 0; transition: visibility 0s 2s, opacity 2s linear;}"]
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayNotification: boolean = false;

  removeNotification() {
    this.displayNotification = true;
  }
}
