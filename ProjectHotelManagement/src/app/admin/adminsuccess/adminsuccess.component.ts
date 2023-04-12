import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-adminsuccess',
  templateUrl: './adminsuccess.component.html',
  styleUrls: ['./adminsuccess.component.scss']
})
export class AdminsuccessComponent implements OnInit {
  apidata: any;

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.getHotelDetails();

  }


  getHotelDetails() {
    this.dataService.getHDcall().subscribe((data) => {
      this.apidata = data;
      console.log(this.apidata, 'this.apidata');

    })
  }

  async deleteData(id: any) {

    this.apidata = await this.dataService.deleteApi(id).toPromise()
    console.log(this.apidata, 'delete api');

    this.getHotelDetails();

  }

}