import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  private readonly baseUrl = environment.apiUrl;
  public readonly ApiUser = `${this.baseUrl}UserController/GetuserById`;
  public readonly ApiGetAllUser = `${this.baseUrl}UserController/GetAllUsers`;
  public readonly ApiUpdateUser = `${this.baseUrl}UserController/UpdateUser`;

  constructor() { }
}