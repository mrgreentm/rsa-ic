import { HomeRoutingModule } from './home.routing.module';
import { SharedModuleModule } from './../shared-module/shared-module.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, SharedModuleModule, HomeRoutingModule],
  exports: [HomeComponent],
})
export class HomeModule {}
