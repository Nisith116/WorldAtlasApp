import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AppService } from '../../app.service';
import { ToastrService } from 'ngx-toastr';
import { RouterModule, Router,ActivatedRoute } from '@angular/router';
import { countryView } from './countryViewInterface';
import { Location } from '@angular/common';


@Component({
  selector: 'app-single-country-view',
  templateUrl: './single-country-view.component.html',
  styleUrls: ['./single-country-view.component.css']
})
export class SingleCountryViewComponent implements OnInit {
  language: any;
  currencyName: any;
  languageName: any;

  constructor(
    public appService:AppService,
    public toastr:ToastrService,
    public route:Router,
    public routes:ActivatedRoute,
    public location:Location,
    
    vcr : ViewContainerRef
  ) { }

  public countryName:any;
  public data:any;
  public filterData:any
  public index:any;
  public countryIndex:any;
  public currency:any='';
  public final:any[]=[];
  public flag1:boolean=true;
  public flag2:boolean=false;
  public languageIndex:any;
  public flag3:boolean;
  public countrySearchName:any;
  public allData:any;
  
  
  public viewHtml:countryView;

  ngOnInit() {
    this.index = this.routes.snapshot.paramMap.get('id');
    this.countryName = (this.index)?(this.appService.allCountries[this.index].name):''
    this.singleCountryView(this.countryName)
  }

  // List of countries respective to currency is displayed
  public currencyView=()=>{
    console.log(this.currency);
    this.flag1=false;
    this.flag2=true
    this.flag3=true
    this.appService.currencyFilter(this.viewHtml.currency)
    .subscribe((data)=>{
      this.filterData= data 
    }) 
  }

  public goBack=()=>{
    this.location.back()
  }

  public searchView=(data)=>{
    this.allData =  this.appService.allData();
  }

  // List of countries respective to language is displayed
  public languageView=()=>{
    console.log(this.language);
    this.flag1=false;
    this.flag2=true;
    this.flag3=false
    this.appService.languageFilter(this.viewHtml.language)
    .subscribe((data)=>{
      this.filterData= data
      console.log(this.filterData); 
    })
  }

  // Single country respective to country name is displayed
  public singleCountryView=(countryName)=>{
    this.appService.singleCountryView(countryName)
    .subscribe((data)=>{
      this.flag1=true;
      
      this.data = data
      console.log(this.data);
      for (let i = 0; i < this.data.length; i++) {
        if(this.data[i].name === countryName){
          this.final.push(this.data[i])
          console.log(this.final);
          this.countryIndex= i
          this.viewHtml ={
          capital:this.data[this.countryIndex].capital,
          population:this.data[this.countryIndex].population,
          timeZones:this.data[this.countryIndex].timezones[0],
          subregion:this.data[this.countryIndex].subregion,
          currency:(this.data[this.countryIndex].currencies[0].code),
          currencyName:(this.data[this.countryIndex].currencies[0].name),
          language:this.data[this.countryIndex].languages[0].iso639_1,
          languageName:this.data[this.countryIndex].languages[0].name,
          
          }
          console.log(this.viewHtml.currencyName);
          console.log(this.viewHtml.languageName);
          
          console.log(this.viewHtml);  
        } 
      }
    })
  }

  public redirect=(i)=>{
    this.final=[]
    this.languageIndex=this.filterData[i].name;
    console.log(this.languageIndex);
    this.flag2=false;
    this.singleCountryView(this.languageIndex) 
  }
}
