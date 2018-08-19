import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  public regionName: any;
  public allCountries:any;
  public countrySearchData:any;
  public currencySearchData:any;
 
  constructor(private http:HttpClient) { }

  public url = 'https://restcountries.eu/rest/v2';



  public countriesView=(regionName):Observable<any>=>{
    this.regionName = regionName
    return this.http.get(`${this.url}/region/` + this.regionName)
  }

  public singleCountryView=(countryName):Observable<any>=>{
    return this.http.get(`${this.url}/name/` + countryName)
  }

  public capitalCityView=(capital)=>{
    return this.http.get(`${this.url}/capital/` + capital)
  }

  public countryData=(data)=>{
    this.allCountries=data 
  }

  public currencyData=(data)=>{
    this.countrySearchData = data
  }

  public currencyFilter=(currencyName)=>{
    return this.http.get(`${this.url}/currency/` + currencyName)
  }

  public languageFilter=(languageCode)=>{
    return this.http.get(`${this.url}/lang/` + languageCode)
  }

  public allData=()=>{
    return this.http.get(`${this.url}/all`)
  }
}
