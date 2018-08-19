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
  
  public category:any='Select category'
  constructor(){}
  
  ngOnInit(){}
  
  public setflag=(event)=>{
    this.category='Select category'
    event.preventDefault()
  }
  
}
