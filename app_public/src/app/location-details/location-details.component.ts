import { Component, Input, OnInit } from '@angular/core';
import { Location } from '../home-list/home-list.component';
import {FormGroup, FormControl } from '@angular/forms';
import {LocatorDataService } from '../locator-data.service';


@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {
  @Input() location: Location;

  constructor(private service: LocatorDataService) { }
  
  // public newReview = {
  //   author: '',
  //   rating: 5,
  //   reviewText: ''
  // };

  formReview = new FormGroup({
    author: new FormControl(''),
    rating: new FormControl(5),
    reviewText : new FormControl(''),
  });

  public formVisible = false;

  public async onReviewSubmit(){
    const locationid = this.location._id;
    //console.log(locationid);
    //console.log(JSON.stringify(this.formReview.value));
    await this.service.postReview(this.formReview.value,locationid);
    this.formReview.reset();
  }


  
  ngOnInit() {}
}
