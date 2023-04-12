import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-hotelbooking',
  templateUrl: './hotelbooking.component.html',
  styleUrls: ['./hotelbooking.component.scss']
})
export class HotelbookingComponent {
  loginForm!: FormGroup;
  formData: any;

  constructor(private formBuilder: FormBuilder, private dataServive: DataService,
    private router: Router) { }

  ngOnInit() {
    this.formValidation();

  }

  loginData() {
    console.log(this.loginForm.value, 'loginForm');
    this.formData = this.loginForm.value;
    this.dataServive.postApiHotelBook(this.formData).subscribe((data) => {
      console.log(data, 'data');

    })
    confirm("You book your hotel succesfully");
    this.router.navigateByUrl('/user/userland')

  }



  formValidation() {
    this.loginForm = this.formBuilder.group({
      userName: new FormControl('', [Validators.pattern("^[a-zA-Z]+$")]),
      userAddress: ['', [Validators.required]],
      userMobile: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      userBookAm: ['1000', [Validators.required]],
    })
  }
}



