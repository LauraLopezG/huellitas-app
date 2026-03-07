import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MascotasService {

  api = 'http://localhost/huellitas_api/mascotas.php';

  constructor(private http:HttpClient) {}

  obtenerMascotas(){
    return this.http.get(this.api);
  }

}