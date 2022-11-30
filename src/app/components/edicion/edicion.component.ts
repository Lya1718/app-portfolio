import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.css']
})
export class EdicionComponent implements OnInit {
  editarPagina : boolean = false;
  ejemploBoolean: boolean = false;
  subscription?: Subscription;
  showAddUser: boolean = false;
  suscripcion?: Subscription;
  suscripcionPues?: Subscription;

  constructor(
    private service: UiService
  ) {

    this.subscription = this.service.onToggle()
      .subscribe((value: any) => this.showAddUser = value)

    this.suscripcion = this.service.onTugle()
      .subscribe((value: any) => this.ejemploBoolean = value)

      this.suscripcionPues = this.service.edicionCarajo()
    .subscribe((value : any) => this.editarPagina = value)

  }
  ngOnInit(): void {
  }

  clickPues(){
    alert("Usted puede editar la página.")
  }

  editarONo(){
    this.service.editarONo();
  }

}
