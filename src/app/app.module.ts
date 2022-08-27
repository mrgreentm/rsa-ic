import { EncriptDecriptModule } from './modules/encript-decript/encript-decript.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, EncriptDecriptModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
