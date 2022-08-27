import { EncriptDecriptComponent } from './encript-decript.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '/encript-decript',
    component: EncriptDecriptComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EncriptDecriptRoutingModule {}
