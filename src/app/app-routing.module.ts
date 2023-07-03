import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PowerbiComponent } from './powerbi/powerbi.component';
import { TableauComponent } from './tableau/tableau.component';
import { DatastudioComponent } from './datastudio/datastudio.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'powerbi', component: PowerbiComponent },
  { path: 'tableau', component: TableauComponent },
  { path: 'datastudio', component: DatastudioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




