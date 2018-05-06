import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AgreementGeneratorComponent } from './agreement-generator/agreement-generator.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
//import { HttpModule } from '@angular/http';
import { Agreement } from './agreement.model';
import { NilaTransactionService } from './nila-transaction.service';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    AgreementGeneratorComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
  //  HttpModule,
    HttpClientModule
  ],
  providers: [
    NilaTransactionService,
    Agreement
  ],
  bootstrap: [AppComponent]
  
})

export class AppModule { }
