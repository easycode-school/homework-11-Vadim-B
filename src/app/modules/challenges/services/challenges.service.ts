import { Injectable } from '@angular/core';
import { environment } from './../../../../environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChallengesService {
  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getChallenges({isActive, isClosed}) {
    let params = new HttpParams();
    params = params.append('isActive', isActive);
    params = params.append('isClosed', isClosed);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      }),
      params
    };

    return this.http.get(`${this.apiUrl}/public/challenges/list`, httpOptions);
  }
}
