import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersigninComponent } from './usersignin/usersignin.component';
import { UserlandComponent } from './userland/userland.component';
import { matFormFieldAnimations, MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { UsersuccessComponent } from './usersuccess/usersuccess.component';
import { SharedModule } from "../shared/shared.module";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatRadioModule } from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import { HotelbookingComponent } from './hotelbooking/hotelbooking.component';



@NgModule({
    declarations: [
        UsersigninComponent,
        UserlandComponent,
        UsersignupComponent,
        UsersuccessComponent,
        HotelbookingComponent
    ],
    imports: [
        CommonModule,
        UserRoutingModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        FormsModule,
        MatRadioModule,
        HttpClientModule,
        Ng2SearchPipeModule,
        SharedModule

    ]
})
export class UserModule { }
