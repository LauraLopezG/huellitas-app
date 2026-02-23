import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Adoptante {
  id: number;
  nombre: string;
  telefono: string;
}

@Injectable({
  providedIn: 'root'
})
export class AdoptantesService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users'; // ejemplo de API JSON

  constructor(private http: HttpClient) {}

  getAdoptantes(): Observable<Adoptante[]> {
    return this.http.get<Adoptante[]>(this.apiUrl);
  }
}