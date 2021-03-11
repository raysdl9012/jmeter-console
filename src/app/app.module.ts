import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { NgJsonEditorModule } from 'ang-jsoneditor';
import { JsonContainerComponent } from './components/json-container/json-container.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BodyComponent,
    JsonContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgJsonEditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
