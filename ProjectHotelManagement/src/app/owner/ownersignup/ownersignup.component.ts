import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-ownersignup',
  templateUrl: './ownersignup.component.html',
  styleUrls: ['./ownersignup.component.scss']
})
export class OwnersignupComponent {
  signUpForm!: FormGroup;
  formdata?: any
  getApiRes?: any;
  constructor(private formBuilder: FormBuilder, private dataService: DataService,
    private router: Router) { }

  ngOnInit() {
    this.formValidation();
  }

  signUpData() {
    this.formdata = this.signUpForm.value
    console.log(this.formdata, "this.signUpForm");
    this.dataService.postApi(this.formdata).subscribe(resPara => {
      this.getApiRes = resPara
      console.log(resPara, "resPara");

      if (this.getApiRes) {
        if (this.dataService.journeyName == "owner") {
          this.router.navigateByUrl('/owner/ownersuccess')
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
}

