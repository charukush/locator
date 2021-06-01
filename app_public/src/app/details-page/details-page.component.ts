import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { LocatorDataService } from '../locator-data.service';
import { Location} from '../home-list/home-list.component';
import { switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  constructor(private http: LocatorDataService,
              private route: ActivatedRoute) { }
    public currentLocation: Location;

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap)=>{
          let id = params.get('locationid');
          //console.log(`The id of page ${id}`);
          return this.http.getLocationId(id);
        })
      )
      .subscribe((newLocation: Location)=>{
        this.currentLocation = newLocation;
        this.pageContent.header.title = newLocation.name;
        this.pageContent.sidebar = `${newLocation.name} is on on Side Bar`;
      })
  }
  public pageContent = {
    header: {
      title: '',
      strapline: ''
    },
    sidebar: ''
  };

}
