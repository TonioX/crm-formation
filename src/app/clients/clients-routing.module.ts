import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';

const routes: Routes = [
  { path: '', component: PageClientsComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})
export class ClientsRoutingModule { }
