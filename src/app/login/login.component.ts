import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username=""
  password=""
  errorMessage="Invalid credentials"
  invalidLogin=false
  constructor(private router: Router, private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
  }
  handleLogin(){
    // console.log('Hi',this.username+" "+this.password);
    // if (this.username=="12345" && this.password=="abcde"){
      
      if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
      this.invalidLogin=false
      this.router.navigate(['welcome',this.username])
      
      
      }
      // this.invalidLogin=true
    // }
    else{
      this.invalidLogin=true
    }
    
  }
}
