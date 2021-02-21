import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageModule } from './homepage/homepage.module'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren:  './homepage/homepage.module#HomepageModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
