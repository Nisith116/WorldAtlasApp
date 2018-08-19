import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionViewComponent } from './region-view/region-view.component';
import { CountriesViewComponent } from './countries-view/countries-view.component';
import { SingleCountryViewComponent } from './single-country-view/single-country-view.component';

import { RouterModule,Routes} from "@angular/router";
import { AppService } from '../app.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    RouterModule.forChild([
      {path:'countriesView',component:CountriesViewComponent},
      {path:'countriesView/:id',component:SingleCountryViewComponent}
    ])
  ],
  declarations: [RegionViewComponent, CountriesViewComponent, SingleCountryViewComponent]
  
})
export class DetailViewModule { }
