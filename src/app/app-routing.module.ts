import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './components/main/main.component';
import {ProjectComponent} from './components/project/project.component';
import {BoardComponent} from './components/board/board.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'project/:name',
    component: ProjectComponent
  },
  {
    path: 'boards',
    component: BoardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
