import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router, private dataservice: DataService) { }
  // ngOnInit(): void {
  // }
  // Journey(data:any){
  //   console.log('...jy');
  //   this.dataservice.userJourney=data
  //   if(data=='Admin'){
  //     this.router.navigateByUrl('/admin/adminland')
  //   }
  //   else if (data=='Owner'){
  //     this.router.navigateByUrl('/owner/ownerland')
  //   }
  //   else  {
  //     this.router.navigateByUrl('/user/userland')
  //   }
  adminSelected() {
    let selectModule = "Admin";
    this.dataservice.moduleNavigation(selectModule);
    this.router.navigateByUrl('/admin/adminland')
  }

  ownerSelected() {
    let selectModule = "Owner";
    this.dataservice.moduleNavigation(selectModule);
    this.router.navigateByUrl('/owner/ownerland')
  }

  userSelected() {
    let selectModule = "User";
    this.dataservice.moduleNavigation(selectModule);
    this.router.navigateByUrl('/user/userland')
  }
}

