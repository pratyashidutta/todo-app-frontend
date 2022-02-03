import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
  authenticate(username, password){
    // console.log("Before "+this.isUserLoggedIn())
    if (username=="12345" && password=="abcde"){
      sessionStorage.setItem('authenticatedUser', username)
      // console.log("After "+this.isUserLoggedIn())
      return true
    }
    return false
  }
  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser')
    console.log(user)
    return !(user==null)
  }
  isUserLoggedOut(){
    sessionStorage.removeItem('authenticatedUser')
  }
}
