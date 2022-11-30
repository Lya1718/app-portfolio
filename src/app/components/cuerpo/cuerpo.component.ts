import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Portfolio } from '../interface';
import { PORTAFOLIO } from '../mock-service';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {
  @Input() acerca: Portfolio = PORTAFOLIO[0];
  @Output() onDeleteInfo: EventEmitter<Portfolio> = new EventEmitter()
  @Input() ejemploBoolean: boolean = false;
  suscripcion: Subscription;
  editarPagina: boolean = false;

  constructor(private uiService : UiService) { 
    this.suscripcion = this.uiService.onTugle()
      .subscribe((value: any) => this.ejemploBoolean = value)
  
      this.suscripcion = this.uiService.edicionCarajo()
      .subscribe((value: any) => this.editarPagina = value)

    }
  ngOnInit(): void {
  }

  onDelete(acerca: Portfolio){
    this.onDeleteInfo.emit(acerca);
  }

}
