import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private hardcodeAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
    this.hardcodeAuthenticationService.isUserLoggedOut()
  }

}
