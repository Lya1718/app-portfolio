import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { Portfolio } from '../components/interface';
import { PORTAFOLIO } from '../components/mock-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EDUCATION } from '../components/mockServicio';
// el fin es escuchar cambios en las funciones async y sync

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class UiService {
  private sujetoPues = new Subject<any>();
  private apiUrl = 'http://localhost:1718/about'
  private subject = new Subject<any>();
  private sujeto = new Subject<any>();
  showAddUser: boolean = false;
  ejemploBoolean: boolean = false;
  editarPagina: boolean = false;

  constructor(private http:HttpClient) { }

  //PROTOCOLO HTTP STARTS 

  obtenerInfo(): Observable<Portfolio[]>{
    const education = of(EDUCATION);
    return this.http.get<Portfolio[]>(this.apiUrl);
  }

  getInfo(): Observable<Portfolio[]>{
    const about = of(PORTAFOLIO);
    return this.http.get<Portfolio[]>(this.apiUrl);
  }

  modificarChanges(educ: Portfolio): Observable<Portfolio>{
    return this.http.post<Portfolio>(this.apiUrl, educ, httpOptions)
  }

  addChanges(acerca: Portfolio): Observable<Portfolio>{
    return this.http.post<Portfolio>(this.apiUrl, acerca, httpOptions)
  }

  deleteInfo(acerca: Portfolio): Observable<Portfolio>{
    const url = `${this.apiUrl}/${acerca.id}`;
    return this.http.delete<Portfolio>(url);
  }

  //PROTOCOLO HTTP ENDS 

  toogleAddUser(): void{
      this.showAddUser = !this.showAddUser
      this.subject.next(this.showAddUser)
  }  
  //lo que esto hace es cambiar el valor del booleano del original
  //al contrario

  otraFuncion(): void{
    this.ejemploBoolean = !this.ejemploBoolean
    this.sujeto.next(this.ejemploBoolean)
  }

  editarONo(){
    this.editarPagina = !this.editarPagina
    this.sujetoPues.next(this.editarPagina)
  }

  onTugle(): Observable<any>{
    return this.sujeto.asObservable()
  }

  onToggle(): Observable<any>{
    return this.subject.asObservable()
  }

  edicionCarajo(): Observable<any>{
    return this.sujetoPues.asObservable()
  }
}

//npm install json-server
//npm run server