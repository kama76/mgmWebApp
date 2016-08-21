import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { TopNavigationComponent } from './topnavigation.component';
import { MetroMenuComponent } from './metromenu.component';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent,
    TopNavigationComponent,
    MetroMenuComponent
 ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
