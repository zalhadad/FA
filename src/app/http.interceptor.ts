import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {from, Observable, throwError} from 'rxjs';
import {catchError, flatMap, tap} from 'rxjs/operators';

import {UsersService} from './providers/users.service';
import {LoadingController} from "@ionic/angular";
import {LoadingService} from "./providers/loading.service";

@Injectable()
export class FAHttpInterceptor implements HttpInterceptor {
    constructor(private usersService: UsersService, private loading: LoadingService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.loading.show().pipe(
            flatMap((loader) => {
                return this
                    .usersService
                    .getloginInfo()
                    .pipe(
                        flatMap((authData) => {
                            if (authData) {
                                request = request.clone({
                                    setHeaders: {
                                        Authorization: `Basic ${authData}`
                                    }
                                });
                            }
                            return next.handle(request).pipe(catchError(err => {
                                if (err.status === 401) {
                                    // auto logout if 401 response returned from api
                                    this.usersService.logout();
                                    location.reload(true);
                                }
                                const error = err.error.message || err.statusText;
                                return throwError(error);
                            }), tap(() => {
                                loader.subscribe(res => res.dismiss());
                            }));
                        })
                    );
            }));
    }
}