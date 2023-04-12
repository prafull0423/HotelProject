import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-adminsignup',
  templateUrl: './adminsignup.component.html',
  styleUrls: ['./adminsignup.component.scss']
})
export class AdminsignupComponent {
  signUpForm!: FormGroup;
  formdata: any
  getApiRes: any;
  password: any;
  // password: any;
  // confirmPassword: any;
  // checkPass: boolean = false;
  // hideNotification: boolean = true;
  // showNotification: boolean = true;
  constructor(private formBuilder: FormBuilder, private dataService: DataService,
    private router: Router) { }

  ngOnInit() {
    this.formValidation();

  }


  //  hideToats(){
  //    this.hideNotification = false;
  //  }

  signUpData() {
    this.formdata = this.signUpForm.value
    console.log(this.formdata, "this.signUpForm");
    this.dataService.postApi(this.formdata).subscribe(resPara => {
      this.getApiRes = resPara
      console.log(resPara, "Sign Up form data");

      if (this.getApiRes) {
        if (this.dataService.journeyName == "admin") {
          this.router.navigateByUrl('/admin/adminsuccess')
        }
      }

    })

  }
  // signUpData(){
  //   console.log(this.signUpForm.value ,"this.signUpForm");


  // }
  formValidation() {
    this.signUpForm = this.formBuilder.group({
      userName: new FormControl('', [Validators.pattern("^[a-zA-Z]+$")]),
      userEmail: ['', [Validators.required, Validators.email]],
      userMob: ['', [Validators.pattern, Validators.maxLength(10), Validators.minLength(10)]],
      gender: ['', [Validators.required]],
      userpass: ['', [Validators.pattern, Validators.required]],
      userCheck: ['', [Validators.requiredTrue]],
      userConfirmpass: ['', [Validators.required]]
    },
      { validator: this.checkIfMatchingPasswords('userpass', 'userConfirmpass') })
  }
  checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey],
        passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({ notEquivalent: true })
      }
      else {
        return passwordConfirmationInput.setErrors(null);
      }
    }
  }
  showPassword() {
    this.password = document.getElementById("confirmPassword");
    this.password = document.getElementById("password");

    if (this.password.type === "password") {
      this.password.type = "text";
    } else {
      this.password.type = "password";
    }
    this.router.navigateByUrl('/admin/adminland');

  }


  //   passwordVal(data: any) {
  //     console.log(data.target.value, 'passwordValue');
  //     this.password = data.target.value;
  //     if (this.confirmPassword) {
  //       if (this.password == this.confirmPassword) {
  //         //this.checkPass = false
  //         return this.confirmPassword.setErrors({notEquivalent: null})
  //       }
  //       else {
  //         //this.checkPass = true
  //         return this.confirmPassword.setErrors({notEquivalent: true})
  //       }
  //     }
  //     else {
  //      // this.checkPass = true
  //      return this.confirmPassword.setErrors({notEquivalent: true})
  //     }
  //   }  

  //  confirmPasswordVal(data:any){
  //     console.log(data.target.value ,'ConfirmPassword');
  //     this.confirmPassword = data.target.value;
  //     if (this.password) {
  //       if (this.password == this.confirmPassword) {
  //         //this.checkPass = false
  //         return this.password.setErrors({notEquivalent: null})
  //       }
  //       else {
  //         //this.checkPass = true
  //         return this.password.setErrors({notEquivalent: true})
  //       }
  //     }
  //     else {
  //       //this.checkPass = true
  //       return this.password.setErrors({notEquivalent: true})
  //     }
  //   }

}

