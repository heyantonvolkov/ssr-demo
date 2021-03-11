import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [FirstComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: FirstComponent}])
  ]
})
export class FirstModule { }
