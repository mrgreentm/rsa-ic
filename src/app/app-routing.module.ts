import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'encript-decript',
    loadChildren: () =>
      import('./modules/encript-decript/encript-decript.module').then(
        (m) => m.EncriptDecriptModule
      ),
  },
  {
    path: '**',
    redirectTo: 'encript-decript'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
