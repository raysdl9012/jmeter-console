import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { NgJsonEditorModule } from 'ang-jsoneditor';
import { JsonContainerComponent } from './components/json-container/json-container.component';
import { ConcurrencyComponent } from './components/jmeter/concurrency/concurrency.component';
import { ThreadgroupComponent } from './components/jmeter/threadgroup/threadgroup.component';
import { GlobalVariablesComponent } from './components/jmeter/global-variables/global-variables.component';
import { NameProjectComponent } from './components/steps/name-project/name-project.component';
import { VariablesComponent } from './components/steps/variables/variables.component';
import { ActivityComponent } from './components/steps/activity/activity.component';
import { SelectedActivityComponent } from './components/jmeter/selected-activity/selected-activity.component';
import { FileSaverModule } from 'ngx-filesaver';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BodyComponent,
    JsonContainerComponent,
    ConcurrencyComponent,
    ThreadgroupComponent,
    GlobalVariablesComponent,
    NameProjectComponent,
    VariablesComponent,
    ActivityComponent,
    SelectedActivityComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FileSaverModule,
    NgJsonEditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
