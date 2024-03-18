import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree , Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router){}

  token:any ;


  
  
  canActivate(){

    this.token=localStorage.getItem('token');
    if (this.token){
      console.log(this.token)
      return true; 

    }else{
      console.log(this.token)
      this.router.navigate(['login'])
      return false ;
    }


  }

    
    
}
  

