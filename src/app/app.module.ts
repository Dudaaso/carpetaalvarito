import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PowerbiComponent } from './powerbi/powerbi.component';
import { TableauComponent } from './tableau/tableau.component';
import { DatastudioComponent } from './datastudio/datastudio.component';
import { HomeComponent } from './home/home.component';
import { NavigateComponent } from './navigate/navigate.component';

@NgModule({
  declarations: [
    AppComponent,
    PowerbiComponent,
    TableauComponent,
    DatastudioComponent,
    HomeComponent,
    NavigateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
