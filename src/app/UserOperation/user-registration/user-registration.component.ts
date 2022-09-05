import { UserService } from 'src/app/Services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/User/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  user = new User;

  confirmPassword:String;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }
  registerUser(){
    console.log(this.user);
      this.userService.registerUser(this.user).subscribe(response => {
        this.router.navigate(['userLogin']);
      })
  }

}
