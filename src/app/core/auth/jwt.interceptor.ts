import { HttpInterceptorFn } from "@angular/common/http"; 
import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { catchError } from "rxjs";
import { throwError } from "rxjs";


export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
        const router = inject(Router);
        const token =  localStorage.getItem('auth_token');

        const authReq = token 
        ? req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        })
        : req;

        return next(authReq).pipe(
            catchError(err => {
                if(err.status === 401 || err.status === 403){
                    localStorage.removeItem('auth_token');
                    router.navigate(['/login']);
                }
                return throwError(() => err);
            })
        );
};