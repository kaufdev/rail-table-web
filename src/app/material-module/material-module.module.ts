import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';

const modules = [
  MatToolbarModule,
  MatButtonModule,
  MatGridListModule,
  MatDialogModule,
  MatFormFieldModule
];

@NgModule({
  imports: [
    modules
  ],
  exports: [
    modules
  ]
})
export class MaterialModuleModule { }
