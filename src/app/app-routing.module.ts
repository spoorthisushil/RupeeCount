import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IfscCodesComponent } from './ifsc-codes/ifsc-codes.component';
import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {path:'IfscCodes', component: IfscCodesComponent},
  {path:'EmiCalculator', component:EmiCalculatorComponent},
  {path:'About', component:AboutComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
