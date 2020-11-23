import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Insurance } from './models/insurance';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  constructor(private httpClient: HttpClient) { }

  addInsurance(insurance: Insurance): Observable<Insurance> {
    return this.httpClient.post<Insurance>('http://localhost:4200/api/insurance', insurance);
  }
}
