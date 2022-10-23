import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'X-RapidAPI-Key': `${env.RAPIDAPI_KEY}`,
                'X-RapidAPI-Host': `${env.RAPIDAPI_HOST}`
            },
            setParams:{
                key:`${env.API_KEY}`
            }
        })
        return next.handle(req);
    }
}