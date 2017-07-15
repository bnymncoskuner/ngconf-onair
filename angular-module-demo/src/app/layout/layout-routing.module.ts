import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [{
  path: '',
  redirectTo: 'account',
  pathMatch: 'full'
},
{
  path: 'activities',
  loadChildren: '../activities/activities.module#ActivitiesModule'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
