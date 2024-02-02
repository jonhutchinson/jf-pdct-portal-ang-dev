import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface AccessRequestPayload {
  email: string;
  role: string;
  product: string;
  details: string;
}

@Injectable({
  providedIn: 'root'
})
export class AccessService {
  constructor(private http: HttpClient) {}

  accessRequest(payload: AccessRequestPayload): Observable<null> {
    return this.http.post<null>('https://ligbwkq4wh.execute-api.eu-west-2.amazonaws.com/api/access-request', payload);
  }
}
