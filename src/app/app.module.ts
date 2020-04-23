import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialDatatableComponent } from './shared/material-datatable/material-datatable.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { FacultyDetailsComponent } from './faculty-details/faculty-details.component';
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialDatatableComponent,
    StudentDetailsComponent,
    FacultyDetailsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
