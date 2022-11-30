import { Component, OnInit, Output, Input } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() ejemploBoolean: boolean = false;
  @Output() email: string = "";
  @Output() password: string = "";
  showAddUser: boolean = false;
  subscription?: Subscription;
  suscripcion?: Subscription;


  constructor(
    private service: UiService
  ) {

    this.subscription = this.service.onToggle()
      .subscribe((value: any) => this.showAddUser = value)

    this.suscripcion = this.service.onTugle()
      .subscribe((value: any) => this.ejemploBoolean = value)

  }

  ngOnInit(): void {
  }

  onClick() {
    
    if (this.email == "ramoslou137@gmail.com" && this.password == "youandmeforever") {
      alert("WELCOME");
      this.email = ""
      this.password = ""
      return this.otraFuncion();
    }
    else {
      return alert("Usted no tiene autorización para ingresar")
    }
  }

  otraFuncion() {
    this.service.otraFuncion();
    this.service.toogleAddUser();
  }

  cerrar(){
    this.service.toogleAddUser();
    this.email = ""
    this.password = ""
  }
}







