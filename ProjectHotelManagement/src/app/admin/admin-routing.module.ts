import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminlandComponent } from './adminland/adminland.component';
import { AdminsigninComponent } from './adminsignin/adminsignin.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { AdminsuccessComponent } from './adminsuccess/adminsuccess.component';


const routes: Routes = [
  { path: 'adminland', component: AdminlandComponent },
  { path: '', redirectTo: 'adminland', pathMatch: 'full' },

  { path: 'adminsignin', component: AdminsigninComponent },
  { path: 'adminsignup', component: AdminsignupComponent },

  { path: 'adminsuccess', component: AdminsuccessComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
