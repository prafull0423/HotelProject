import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-usersuccess',
  templateUrl: './usersuccess.component.html',
  styleUrls: ['./usersuccess.component.scss']
})
export class UsersuccessComponent {

  apidata: any;
  searchText: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getHotelDetails();

  }

  getHotelDetails() {
    this.dataService.getHDcall().subscribe((data: any) => {
      this.apidata = data;
      console.log(this.apidata, 'this.apidata');

    })

  }

}
