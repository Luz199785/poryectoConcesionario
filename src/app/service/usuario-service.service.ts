import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const urlBase = "http://localhost:8080/usuarios";

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  constructor(private http : HttpClient) { }

  getAllUsers() {
    return this.http.get<any>(urlBase + "/all")
  }
}
