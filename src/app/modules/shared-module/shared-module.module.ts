import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModuleModule } from './../material-module/material-module.module';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [MaterialModuleModule, ReactiveFormsModule],
  declarations: [],
  exports: [MaterialModuleModule, ReactiveFormsModule],

})
export class SharedModuleModule { }
