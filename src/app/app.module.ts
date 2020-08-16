import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BoardComponent} from './components/board/board.component';
import {MainComponent} from './components/main/main.component';
import {ProjectComponent} from './components/project/project.component';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    MainComponent,
    ProjectComponent,
    AuthenticationComponent,
    NavbarComponent
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
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AuthenticationComponent],
})
export class AppModule {
}
