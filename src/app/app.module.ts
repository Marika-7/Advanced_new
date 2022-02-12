import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task01Component } from './task01/task01.component';
import { Task02Component } from './task02/task02.component';
import { Task03Component } from './task03/task03.component';
import { TableComponent } from './task03/table/table.component';
import { Task04Component } from './task04/task04.component';
import { SearchPipe } from './task04/search.pipe';
import { SortPipe } from './task04/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Task01Component,
    Task02Component,
    Task03Component,
    TableComponent,
    Task04Component,
    SearchPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
