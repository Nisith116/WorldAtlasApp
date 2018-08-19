import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DetailViewModule } from './detail-view/detail-view.module';
import { AppService } from './app.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule,Routes} from "@angular/router";
import { ToastrModule } from 'ngx-toastr';
import { RegionViewComponent } from './detail-view/region-view/region-view.component';

import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DetailViewModule,
    HttpClientModule,
    HttpModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      {path:'RegionView',component:RegionViewComponent,pathMatch:'full'},
      {path:'',redirectTo: 'RegionView', pathMatch:'full'},
      {path:'*',component:RegionViewComponent},
      {path:'**',component:RegionViewComponent},
    ])
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
