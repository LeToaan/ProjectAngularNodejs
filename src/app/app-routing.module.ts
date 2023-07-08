import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ABCComponent } from './abc.component';

const routes: Routes = [
  {path: 'abc', component:ABCComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
