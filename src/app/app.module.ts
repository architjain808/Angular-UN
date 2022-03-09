import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataFlowService } from './Services/data-flow.service';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FirseInterceptorService } from './firse-interceptor.service';
import { FormsDataModule } from './form-data/form-data.module';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    FormsDataModule,
    HttpClientModule,
  ],
  providers: [
    DataFlowService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FirseInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
