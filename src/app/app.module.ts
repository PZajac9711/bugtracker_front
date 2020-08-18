import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BoardComponent} from './components/board/board.component';
import {MainComponent} from './components/main/main.component';
import {ProjectComponent} from './components/project/project.component';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthenticationComponent} from './components/authentication/authentication.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NavbarComponent} from './components/navbar/navbar.component';
import {DataService} from './services/data.service';
import {TokenInterceptor} from './services/token.interceptor';
import { CreateBoardComponent } from './components/create-board/create-board.component';
import { RepeatPasswordDirective } from './shared/repeat-password.directive';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    MainComponent,
    ProjectComponent,
    AuthenticationComponent,
    NavbarComponent,
    CreateBoardComponent,
    RepeatPasswordDirective,
    NewTaskComponent,
    TaskDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DataService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
  entryComponents: [AuthenticationComponent, CreateBoardComponent, NewTaskComponent],
})
export class AppModule {
}
