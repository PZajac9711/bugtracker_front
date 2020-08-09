import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './components/main/main.component';
import {ProjectComponent} from './components/project/project.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'project/:name',
    component: ProjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
