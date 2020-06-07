import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../Services/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.pattern("[a-z0-9.@]*")]],
      password: ["", [Validators.required, Validators.minLength(5)]],
    });
  }

  onSubmit(f) {
    this.userService.login(f.value).subscribe(
      (res) => {
        console.log("SuccessFull", res);
      },
      (err) => {
        console.log("Having Issue", err);
      }
    );
  }
}
