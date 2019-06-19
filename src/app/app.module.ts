import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { gettingRecord } from './globalService.service';
import { FormsModule } from '@angular/forms';
import { FilterPipe} from './filter.pipe';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AppComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  
  ],
  providers: [gettingRecord],
  bootstrap: [AppComponent]
})
export class AppModule { }
