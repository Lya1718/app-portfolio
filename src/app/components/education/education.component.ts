import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';
import { Portfolio } from '../interface';
import { EDUCATION } from '../mockServicio';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  @Input() educ: Portfolio = EDUCATION[0];
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

  borrar(educ: Portfolio){
    this.onDeleteInfo.emit(educ);
  }

}
