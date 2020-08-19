import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './components/main/main.component';
import {ProjectComponent} from './components/project/project.component';
import {BoardComponent} from './components/board/board.component';
import {AuthGuard} from './guard/auth.guard';
import {ResetComponent} from './components/reset/reset.component';
import {GenerateResetComponent} from './components/generate-reset/generate-reset.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'project/:name',
    component: ProjectComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'boards',
    component: BoardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'reset/:token',
    component: ResetComponent
  },
  {
    path: 'generate',
    component: GenerateResetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
