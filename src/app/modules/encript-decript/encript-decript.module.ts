import { EncriptDecriptRoutingModule } from './encript-decript.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncriptDecriptComponent } from './encript-decript.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';

@NgModule({
  declarations: [EncriptDecriptComponent],
  imports: [CommonModule, EncriptDecriptRoutingModule, SharedModuleModule],
  exports: [EncriptDecriptComponent]
})
export class EncriptDecriptModule {}
