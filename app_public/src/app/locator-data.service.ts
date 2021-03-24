import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Location } from './home-list/home-list.component';


@Injectable({
  providedIn: 'root'
})
export class LocatorDataService {

  constructor(private http: HttpClient) { }

  private apiBaseUrl = "http://localhost:3000/api";

  public async getLocations(): Promise<Location[]>{
    try{
      const resp = await this.http.get(`${this.apiBaseUrl}/locations`).toPromise();
      return resp as Location[];
    }catch(err){
      console.error(err);
    }

  }
  public async getLocationId(id): Promise<Location>{
    try{
      const resp = await this.http.get(`${this.apiBaseUrl}/locations/${id}`).toPromise();
    return resp as Location;
  }catch(err){
    console.error(err);
  }
}
}
