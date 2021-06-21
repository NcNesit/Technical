import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Model/user';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient, private urlService: UrlService) { }

 
  async GetUser(): Promise<any> {
    try {
      const response = <any>await (this.http.get(this.urlService.ApiUser).toPromise());
      return this.mapUser(response);
    } catch (e) {
      console.error(e);
    }
  }


  async GetAllUsers(): Promise<any> {
    try {
      const response: Array<any> = <Array<any>>await (this.http.get(this.urlService.ApiGetAllUser).toPromise());
      return response.map(this.mapUser);
    } catch (e) {
      console.error(e);
    }
  }


  UpdateUser(user: User): Observable<User> {    
    return this.http.put<User>(this.urlService.ApiUpdateUser, user)    
      .pipe(
      );   
  }


  mapUser(data: any): User {
    var user = new User();
    user.userId = data.userId
    user.userName = data.userName
    user.firstName = data.firstName
    user.lastName = data.lastName
    user.email = data.email
    user.phoneNumber = data.phoneNumber
    return user;
  }


}
