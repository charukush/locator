import { Component, OnInit } from '@angular/core';
import { LocatorDataService } from '../locator-data.service';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {

  constructor(private service: LocatorDataService) { }
  
  locations: Location[];

  async ngOnInit()  {
    await this.getLocations()
  }

  async getLocations(){
    this.locations = await this.service.getLocations();
  }

}
export class Location {
  _id: string;
  name: string;
  address: string;
  rating: number;
  facilities: string[];
}
