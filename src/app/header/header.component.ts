import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  slogan: string = 'Your one stop for everything.'; // string interpolation
  source: string = "../../assets/undraw_shopping_app_flsj.svg"

  getSlogan() {
    return 'This is a new slogan for this web application';
  }

}
