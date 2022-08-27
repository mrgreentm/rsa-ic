import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule],
  declarations: [],
  exports: [MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule],
})
export class MaterialModuleModule {}
