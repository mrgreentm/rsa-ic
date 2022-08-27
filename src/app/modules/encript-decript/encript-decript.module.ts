import { EncriptDecriptRoutingModule } from './encript-decript.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncriptDecriptComponent } from './encript-decript.component';

@NgModule({
  declarations: [EncriptDecriptComponent],
  imports: [CommonModule, EncriptDecriptRoutingModule],
  exports: [EncriptDecriptComponent]
})
export class EncriptDecriptModule {}
