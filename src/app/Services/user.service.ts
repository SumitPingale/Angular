import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { from } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}
  public baseUrl = "http://localhost:8080/auth";

  login(data) {
    return this.http.post<any>(this.baseUrl + "/login", data);
  }

  signUp(data) {
    console.log("si", data);
    return this.http.put<any>(this.baseUrl + "/signup", data);
  }
}
