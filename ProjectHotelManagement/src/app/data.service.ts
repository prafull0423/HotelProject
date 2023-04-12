import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataId: any;
  selectModule!: string;
  journeyName!: string;
  getApiData: any;
  newRegistration: boolean = false;
  hotelListByOwnerName: any;
  storeData: any;




  userJourney: any;
  url = 'http://localhost:3000';
  adminurl = 'http://localhost:3000/admin';
  ownerurl = 'http://localhost:3000/owner';
  userurl = 'http://localhost:3000/user';
  hotelurl = 'http://localhost:3000/hotelDetails';
  hotelDetailsurl = 'http://localhost:3000/hotelDetails';
  bookingUrl = 'http://localhost:3000/hotelbooking';




  constructor(private http: HttpClient) { }

  moduleNavigation(module: any) {
    this.journeyName = module;
    this.selectModule = module;
    console.log(this.selectModule, "this.selectModule");
    this.url = `http://localhost:3000/${module}`;
    // this.url ="http://localhost:3000/" + module;
    console.log(this.url, "this.url");
  }



  //SignIn Data get Api of owner user admin 
  getApiCall() {
    return this.http.get(this.url)
  }
  //SignUp Data post Api of owner user admin 
  postApi(user: any) {
    return this.http.post(this.url, user)
  }
  //ownerregistratin post Api
  postApicall(data: any) {
    return this.http.post(this.hotelDetailsurl, data)
  }
  //putApiCall(id:any,body:any){
  // return this.http.put(this.hotelDetailsurl,data)
  //}
  getHDcall() {
    return this.http.get(this.hotelDetailsurl)
  }

  deleteApi(id: any) {
    return this.http.delete(this.hotelDetailsurl + "/" + id)
  }

  //Post For Hotelbooking
  postApiHotelBook(data: any) {
    return this.http.post(this.bookingUrl, data)
  }
  getApiCallById(id: any) {
    return this.http.get(this.hotelDetailsurl + "/" + id)
  }
  //getUserCall
  getUserApiCall() {
    return this.http.get(this.userurl)
  }
  //postUserCall
  postUserApiCall(data: any) {
    return this.http.post(this.userurl, data)
  }
}

