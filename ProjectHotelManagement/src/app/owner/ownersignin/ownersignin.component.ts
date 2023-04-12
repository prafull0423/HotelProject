import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-ownersignin',
  templateUrl: './ownersignin.component.html',
  styleUrls: ['./ownersignin.component.scss']
})
export class OwnersigninComponent implements OnInit {
  responseData: any;
  signINForm: any;
  signInForm: any;
  ownerValid: any;
  hotelList: any;

  hotelListByName: any = [];


  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.ownerGetApiCall();
    this.hotelListGetApi();
  }

  //ownerSignUp Get Data
  ownerGetApiCall() {
    this.dataService.getApiCall().subscribe(respo => {
      this.responseData = respo;
      console.log(this.responseData, 'ownerSignUp Data');

    })
  }

  //hotel Details get data
  hotelListGetApi() {
    this.dataService.getHDcall().subscribe(respo => {
      this.hotelList = respo;
      console.log(this.hotelList, 'get hotelList');

    })

  }
  submit(data: any) {
    console.log(data, 'data');
    this.signInForm = data;
    // //console.log(this.signInForm,'this.signInForm');

    // this.responseData = await this.dataService.getApiCall().toPromise()
    // console.log(this.responseData ,"this.responseData ");

    if (this.hotelList) {
      this.hotelList.forEach((ele: any) => {
        if (this.signInForm.userName == ele.ownerName) {
          this.hotelListByName.push(ele);
        }

      })
      this.dataService.hotelListByOwnerName = this.hotelListByName;
      console.log(this.hotelListByName, 'hotelListByName');

    }

    if (this.responseData) {
      this.ownerValid = this.responseData.find((ele: any) => {
        return this.signInForm.userName == ele.userName && this.signInForm.password == ele.userpass
      })


    }
    this.redirection();
  }

  redirection() {
    if (this.ownerValid) {
      alert('Login Successful')
      this.router.navigateByUrl('/owner/ownersuccess');
    }
    else {
      alert('user not found')
      this.router.navigateByUrl('/owner/ownersignin')

    }
  }
}








