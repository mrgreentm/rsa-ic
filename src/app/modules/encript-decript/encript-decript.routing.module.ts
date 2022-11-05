import { DecriptComponent } from './decript/decript.component';
import { GeneratePublicKeysComponent } from './generate-public-keys/generate-public-keys.component';
import { EncriptDecriptComponent } from './encript-decript.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: EncriptDecriptComponent,
  },
  {
    path: 'generate-public-keys',
    component: GeneratePublicKeysComponent,
  },
  {
    path: 'decript',
    component: DecriptComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EncriptDecriptRoutingModule {}
