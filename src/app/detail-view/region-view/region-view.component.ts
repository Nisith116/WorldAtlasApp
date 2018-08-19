import { Component, OnInit,ViewContainerRef } from '@angular/core';
import { AppService } from '../../app.service';
import { ToastrService } from 'ngx-toastr';
import { RouterModule, Router } from '@angular/router';

import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-region-view',
  templateUrl: './region-view.component.html',
  styleUrls: ['./region-view.component.css']
})
export class RegionViewComponent implements OnInit {

  constructor(
    public appService:AppService,
    public toastr:ToastrService,
    public route:Router,
    vcr : ViewContainerRef
  ) { }

  public regionName;
  public countryData:any
  public element:any
  public element1:any

  public data: any=[];
  public i:any;
  id: any;
  public flag:boolean=true;

  public category:any='Select category'
  ngOnInit() {
    this.flag = true
   
  }
  public makeTheCountryView=(regionName)=>{
      this.appService.countriesView(regionName)
      .subscribe((data)=>{
        this.countryData = data
      })
        this.route.navigate(['/countriesView'])
      }
  
      public setflag=(event)=>{
        this.flag = true
        this.id=null
        this.category='Select category'
        event.preventDefault()
      }
    
      public setId=(id)=>{
        this.id = id
        if(this.id == 1){
          this.category='Country'
        }
        if(this.id == 2){
          this.category='Capital City'
          
        }
        if(this.id==3){
          this.category='Select category'
        }
      }
    
      // Single country respective to searched country or capital city  is displayed
      public countrySearch=(country)=>{
        if(this.id == 1){
          this.category='Country'
        this.appService.singleCountryView(country)
        .subscribe((data)=>{
          console.log(data);
          this.flag=false
          for (let j = 0; j < data.length; j++) {
            this.data[j]=data[j] 
          }
   
          for (let index = 0; index < this.data.length; index++) {
            if(country.toLowerCase() === this.data[index].name.toLowerCase()){
              this.i = index 
            }  
          }
          this.appService.countryData(this.data)
        this.route.navigate(['/countriesView',this.i])
        },
        err=>{
          this.toastr.error("Please enter valid Country") 
        })  
      }
        
        else if(this.id==2){
          this.category='Capital City'
          
          this.appService.capitalCityView(country)
          .subscribe((data)=>{
            console.log(data);
            this.flag=false
            this.appService.countryData(data)
            this.i=0
            this.route.navigate(['/countriesView',this.i])
          },
          err=>{
            this.toastr.error("Please enter valid Capital City") 
          })
        } 
      }
  }

  

