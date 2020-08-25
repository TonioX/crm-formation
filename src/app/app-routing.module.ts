import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, PreloadAllModules } from '@angular/router';
import { PageClientsComponent } from './clients/pages/page-clients/page-clients.component';
import { PageOrdersComponent } from './orders/pages/page-orders/page-orders.component';
import { PageLoginComponent } from './login/pages/page-login/page-login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'clients', loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule) },
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  { path: '**', loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) }
];

const childRoutes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing:false,preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
