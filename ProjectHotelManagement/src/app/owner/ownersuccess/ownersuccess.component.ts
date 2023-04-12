import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-ownersuccess',
  templateUrl: './ownersuccess.component.html',
  styleUrls: ['./ownersuccess.component.scss']
})
export class OwnersuccessComponent {
  apidata: any;
  hotelListByName: any;
  hideTable = false;
  refreshHotelList: any = [];

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    // this.getHotelDetails();
    this.hotelListByName = this.dataService.hotelListByOwnerName;
    console.log(this.hotelListByName, 'hotelListByName');

  }

  //  getHotelDetails(){
  //    this.dataService.getHDcall().subscribe((data: any)=>{
  //      this.hotelListByName = data;
  //      console.log(this.hotelListByName,'hotelListByName');

  //    })
  //  }
  async deleteData(id: any) {

    await this.dataService.deleteApi(id).toPromise()
    //console.log  (this.hotelListByName ,'delete api');

    this.refreshHotalData(id);
  }
  refreshHotalData(id: any) {
    this.hotelListByName.forEach((ele: any) => {
      if (ele.id != id) {
        this.refreshHotelList.push(ele)
      }
    })
    this.hotelListByName = [...this.refreshHotelList]
    this.refreshHotelList = [];

  }

  async editData(id: any) {
    this.dataService.dataId = id;
    this.dataService.getApiData = await this.dataService.getApiCallById(id).toPromise()

    this.router.navigateByUrl('/owner/ownerregistration')

  }

  newRegistration() {
    this.dataService.newRegistration = true
    this.router.navigateByUrl('/owner/ownerregistration')
  }
  hotelDetails() {
    this.dataService.newRegistration = false;
    this.router.navigateByUrl('/owner/ownersuccess');
    this.hideTable = true;

  }

  ngOnDistroy() {
    this.dataService.newRegistration = false
  }
}


