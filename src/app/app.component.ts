import { Component,OnInit } from '@angular/core';
import { AppService } from './app.service';
import { RouterModule, Router } from '@angular/router';
import { ToastrService } from '../../node_modules/ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'worldMap';
  public data: any=[];
  public i:any;
  id: any;
  public flag:boolean=true;

  public category:any='Select category'
  constructor(
    public appService:AppService,
    public toastr:ToastrService,
    public route:Router
  ){}
  ngOnInit(
   
  ){
    this.flag= true;
  }
  public setflag=(event)=>{
    
    this.category='Select category'
    event.preventDefault()
  }
  
}
