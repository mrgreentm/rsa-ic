import { EncriptDecriptRoutingModule } from './encript-decript.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncriptDecriptComponent } from './encript-decript.component';

@NgModule({
  imports: [CommonModule, EncriptDecriptRoutingModule],
  declarations: [EncriptDecriptComponent],
})
export class EncriptDecriptModule {}
