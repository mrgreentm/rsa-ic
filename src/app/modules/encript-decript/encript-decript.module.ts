import { DecriptComponent } from './decript/decript.component';
import { GeneratePublicKeysComponent } from './generate-public-keys/generate-public-keys.component';
import { EncriptDecriptRoutingModule } from './encript-decript.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncriptDecriptComponent } from './encript-decript.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';

@NgModule({
  declarations: [EncriptDecriptComponent, GeneratePublicKeysComponent, DecriptComponent],
  imports: [CommonModule, EncriptDecriptRoutingModule, SharedModuleModule],
  exports: [EncriptDecriptComponent, GeneratePublicKeysComponent, DecriptComponent],
})
export class EncriptDecriptModule {}
