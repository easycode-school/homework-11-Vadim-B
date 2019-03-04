import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpBackend, HttpParams } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OnLoginAnswer } from './../interfaces/OnLoginAnswer';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient,
    httpBackend: HttpBackend
  ) {
    this.http = new HttpClient(httpBackend);
  }

  login(email: string, password: string): Observable<OnLoginAnswer> {
    let params = new HttpParams();
    params = params.append('isActive', '0');
    params = params.append('isClosed', '1');

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      }),
      params
    };

    return this.http.post<OnLoginAnswer>(`${this.apiUrl}/public/auth/login`, { email, password }, httpOptions).pipe(
      map((res: OnLoginAnswer): OnLoginAnswer => {
        if (!res.error) {
          localStorage.setItem('mlp_client_token', res.token);
        }

        return res;
      })
    );
  }
}
