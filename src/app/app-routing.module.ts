import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { DasboadComponent } from './modules/view/dasboad/dasboad.component';
import { ViewProductComponent } from './modules/view/productView/productview.component';
import { ViewUserComponent } from './modules/view/userView/userview.component';
import { ViewComponent } from './modules/view/view.component';

const routes: Routes = [
  {path: '', redirectTo: 'view', pathMatch: 'full'},
  {
    path: 'view',
    component: ViewComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: '', redirectTo: 'dashboad', pathMatch: 'prefix'
      },
      {
        path: 'dashboad', // child route path
        component: DasboadComponent, // child route component that the router renders
      },
      {
        path: 'user', // child route path
        component: ViewUserComponent, // child route component that the router renders
      },
      {
        path: 'product', // child route path
        component: ViewProductComponent, // child route component that the router renders
      }
    ],
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
