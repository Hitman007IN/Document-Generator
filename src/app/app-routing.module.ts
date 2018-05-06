import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgreementGeneratorComponent } from './agreement-generator/agreement-generator.component';
import { HomeComponent } from './home/home.component'; 

const myRoots: Routes = [
  {
      path: '',
      component: HomeComponent
  },
  {
  path: 'generate',
  component: AgreementGeneratorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(myRoots)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
