import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import { AnadirComponent } from './pages/anadir/anadir.component';
import { ListarComponent } from './pages/listar/listar.component';


const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'anadir',component: AnadirComponent},
  {path: 'listar',component: ListarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
