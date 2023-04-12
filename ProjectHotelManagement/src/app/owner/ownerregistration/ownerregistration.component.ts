import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-ownerregistration',
  templateUrl: './ownerregistration.component.html',
  styleUrls: ['./ownerregistration.component.scss']
})
export class OwnerregistrationComponent {

  regitrationForm!: FormGroup;
  formData: any;
  dataId: any;
  editData: any;
  newRegistration: any;

  constructor(private formBuilder: FormBuilder, private dataService: DataService,
    private router: Router) { }

  options: string[] = ['Paneer Tikka Masala', 'Paneer Butter Masala', 'Dosa', 'Mini Thali', 'Special Thali ', 'Mutton Biryani', 'Chicken Biryani', 'Gulab Jamun', 'Egg Varieties', 'Non-Veg Varieties'];

  ngOnInit() {

    //this.dataId = this.dataService.dataId;
    if (this.dataService.newRegistration) {
      this.editData = {}
    }
    else {
      this.editData = this.dataService.getApiData;
    }
    console.log(this.editData, 'this.editData');
    this.formValidation();


  }

  async postHoteldata() {
    console.log(this.regitrationForm.value, 'regitrationForm');
    this.formData = this.regitrationForm.value;

    // if(this.dataId){
    // this.dataService.putApiCall(this.dataId,this.formData).subscribe(result=>{
    //console.log(result);

    //  })
    // }
    ///else{
    this.dataService.storeData = await this.dataService.postApicall(this.formData).toPromise()
    //console.log(result , "result");

    //})
    alert('data update succefully')
    this.router.navigateByUrl('/owner/ownersuccess')

  }
  formValidation() {
    this.regitrationForm = this.formBuilder.group({
      ownerName: [this.editData ? this.editData.ownerName : '', [Validators.required, Validators.maxLength(40)]],
      hotelName: [this.editData ? this.editData.hotelName : '', [Validators.required]],
      hotelAddress: [this.editData ? this.editData.hotelAddress : '', [Validators.required]],
      hotelMobile: [this.editData ? this.editData.hotelMobile : '', [Validators.pattern, Validators.maxLength(10), Validators.minLength(10)]],
      hotelMenu: [this.editData ? '' : '', [Validators.required]],
      roomAvailable: [this.editData ? this.editData.roomAvailable : '', [Validators.required]],
      userPass: [this.editData ? this.editData.userPass : '', [Validators.pattern, Validators.required]],
      owenrCheck: [this.editData ? this.editData.owenrCheck : '', [Validators.requiredTrue]],

    })
  }


}
