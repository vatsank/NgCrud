import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Medicine } from '../models/medicine';

@Injectable()
export class MedicineApiService {

  constructor(private http: HttpClient) { }

   baseURL = 'http://localhost:3000/medicines';

     findAll(): Observable<Medicine[]> {

       return this.http.get<Medicine[]>(this.baseURL);
     }

     remove(codeNumber): Observable<Medicine> {

      return this.http.delete<Medicine>(this.baseURL + '/' + codeNumber);
     }

     add(medicine): Observable<Medicine> {

      const headers =
     new HttpHeaders().set('content-type', 'application/json');
       return this.http.post<Medicine>(this.baseURL, medicine, {headers});

     }
}
