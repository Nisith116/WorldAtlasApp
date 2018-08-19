import { Component, OnInit,ViewContainerRef } from '@angular/core';
import { AppService } from '../../app.service';
import { ToastrService } from 'ngx-toastr';
import { RouterModule, Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-countries-view',
  templateUrl: './countries-view.component.html',
  styleUrls: ['./countries-view.component.css']
})
export class CountriesViewComponent implements OnInit {
  countryIndex: any;

  constructor(
    public appService:AppService,
    public toastr:ToastrService,
    public route:Router,
    public location:Location,
    vcr : ViewContainerRef
  ) { 
    
    
    
  }

  public regionName;
  public data:any
  public element:any
  public element1:any
  public index:any
  public currency:any
  public countryName:any;
  ngOnInit() {
    this.regionName = this.appService.regionName
    this.makeTheCountryView(this.regionName)
  }

  public redirect=(i)=>{
    this.index=i;
    console.log(i);
    
      this.route.navigate(['countriesView',i])
  }

  public goBack=()=>{
    this.location.back()
  }
  
    public getData=(i)=>{
      this.countryIndex=i
      this.regionName = this.appService.regionName
    this.makeTheCountryView(this.regionName)
    }

  
  public makeTheCountryView=(regionName)=>{
    this.appService.countriesView(regionName)
    .subscribe((apiResponse)=>{
      if(apiResponse){
        
        console.log(apiResponse);
        this.data=apiResponse
        this.appService.countryData(this.data)
        console.log(this.appService.allCountries[0]);
        
        
        
      }
      
    })

    

    

   
  }
  

}
