import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerlandComponent } from './ownerland/ownerland.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { OwnersigninComponent } from './ownersignin/ownersignin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OwnersignupComponent } from './ownersignup/ownersignup.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { OwnerregistrationComponent } from './ownerregistration/ownerregistration.component';
import { MatOptionModule } from '@angular/material/core';
import { OwnersuccessComponent } from './ownersuccess/ownersuccess.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SharedModule } from '../shared/shared.module';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    OwnerlandComponent,
    OwnersigninComponent,
    OwnersignupComponent,
    OwnerregistrationComponent,
    OwnersuccessComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    HttpClientModule,
    MatIconModule,
    SharedModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule

  ]
})
export class OwnerModule { }
