import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor(
    private basicAuthService: BasicAuthenticationService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let basicAuthString = this.basicAuthService.getAuthenticatedToken()
    let username=this.basicAuthService.getAuthenticatedUser()
    
    if(basicAuthString && username){
      req = req.clone({
        setHeaders: {
          Authorization: basicAuthString
        }
      })
    }

    return next.handle(req)
  }
}
