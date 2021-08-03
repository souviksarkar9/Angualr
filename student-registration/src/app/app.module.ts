import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MyDataService } from './my-data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SortPipe } from './app.sortPipe';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {HttpClient} from '@angular/common/http'


@NgModule({
  declarations: [
    SortPipe,
    AppComponent
  ],
  imports: [
    BrowserModule,
    //FormsModule
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [MyDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
