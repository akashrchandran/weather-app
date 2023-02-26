import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPAddressData } from '../models/ipaddress.model';

@Injectable({
  providedIn: 'root'
})
export class IpaddressService {

  constructor(private http: HttpClient) { }

  getIpaddress(): Observable<IPAddressData> {
    return this.http.get<IPAddressData>(environment.AbstractAPIUrl, {
      params: new HttpParams()
        .set('api_key', environment.AbstractAPIKey)
    })
  }
}
