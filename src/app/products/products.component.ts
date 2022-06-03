import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products = [
    {
      id: 1,
      name: 'Minialists Analog Watch',
      price: '190',
      color: 'Black',
      available: 'Available',
      image: '../../assets/mqyd1503649978588.webp'
    },
    {
      id: 2,
      name: 'Hisense Ultra HD Smart TV',
      price: '3339',
      color: 'Black',
      available: 'Available',
      image: '../../assets/A5200_700x700px.png'
    },
    {
      id: 3,
      name: 'APPLE iPhone 12',
      price: '1855',
      color: 'Black',
      available: 'Not Available',
      image: '../../assets/194252030998_75b8.webp'
    },
    {
      id: 4,
      name: 'LG Fully Automatic Washing Machine',
      price: '1765',
      color: 'White',
      available: 'Available',
      image: '../../assets/1100.webp'
    },
    {
      id: 5,
      name: 'LG Refrigerator with Door Cooling',
      price: '2815',
      color: 'White',
      available: 'Not Available',
      image: '../../assets/51B+PLv+svL._SY500_.jpg'
    },
    {
      id: 5,
      name: 'DELL Inspiron One 27 Ryzen 7',
      price: '2145',
      color: 'White',
      available: 'Available',
      image: '../../assets/533682-70-5.jpg'
    }


  ];

}
