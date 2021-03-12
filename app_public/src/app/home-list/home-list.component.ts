import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {

  constructor() { }
  locations: Location[] = [{
    _id: "1234",
    name: "Paneera",
    address: "123 Street",
    rating: 4,
    facilities:['hot drinks','wifi','Food']
  },{
    _id: "5679",
    name: "Starbucks",
    address: "456 Street",
    rating: 3,
    facilities:['hot drinks','wifi','Food']

  }];

  ngOnInit(): void {
  }

}
export class Location {
  _id: string;
  name: string;
  address: string;
  rating: number;
  facilities: string[];
}
