import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DatatablesComponent } from './datatables/datatables.component';

const routes: Routes = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: 'index', component: DatatablesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {
}
