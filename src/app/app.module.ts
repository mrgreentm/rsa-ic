import { HomeModule } from './modules/home/home.module';
import { SharedModuleModule } from './modules/shared-module/shared-module.module';
import { EncriptDecriptModule } from './modules/encript-decript/encript-decript.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EncriptDecriptModule,
    BrowserAnimationsModule,
    SharedModuleModule,
    FormsModule,
    HomeModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
