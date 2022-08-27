import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModuleModule } from './../material-module/material-module.module';
import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  imports: [MaterialModuleModule, ReactiveFormsModule],
  declarations: [NavBarComponent, FooterComponent],
  exports: [
    MaterialModuleModule,
    ReactiveFormsModule,
    NavBarComponent,
    FooterComponent,
  ],
})
export class SharedModuleModule {}
