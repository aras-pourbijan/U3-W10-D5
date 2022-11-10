import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlAPI: string = "https://jsonplaceholder.typicode.com/users/";

  constructor(private http: HttpClient) { }

  getAllUser() {
    return this.http.get<any>(this.urlAPI);
  }

  getUserById(id: number) {
    return this.http.get<any>(this.urlAPI + id);
  }

  addUser(obj: any) {
    return this.http.post(this.urlAPI, obj);
  }

  updateUser(obj: any) {
    return this.http.put(this.urlAPI, obj);
  }

  deleteUser(id: number) {
    return this.http.delete(this.urlAPI + id);
  }

}
