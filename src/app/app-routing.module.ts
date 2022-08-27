import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '/encript-decript',
    loadChildren: () =>
      import('./encript-decript/encript-decript.module').then(
        (m) => m.EncriptDecriptModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
