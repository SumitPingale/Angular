import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../Services/user.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"],
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      address: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.pattern("[a-z0-9.@]*")]],
      password: ["", [Validators.required, Validators.minLength(5)]],
      confirmPassword: ["", [Validators.required]],
    });
  }
  onSubmit(f) {
    this.userService.signUp(f.value).subscribe(
      (res) => {
        console.log("SuccessFull", res);
        this.router.navigate(["/login"]);
      },
      (err) => {
        console.log("Having Issue", err);
      }
    );
  }
}
