import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public pageContent = {
    header: {
      title:'Loc8r',
      strapline: 'Find places to work with wifi near you!'
    },
    sidebar: 'This is a Side bar Locator(Controller) helps you find palces to work out and about.'
  };

}
