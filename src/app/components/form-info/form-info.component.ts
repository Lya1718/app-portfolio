import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';
import { Portfolio } from '../interface';

@Component({
  selector: 'app-form-info',
  templateUrl: './form-info.component.html',
  styleUrls: ['./form-info.component.css']
})
export class FormInfoComponent implements OnInit {
  @Output() agregarChanges: EventEmitter<Portfolio> = new EventEmitter();
text: string = "";
title: string = "";
ejemploBoolean: boolean = false;
editarPagina : boolean = false;
suscripcion?: Subscription;
suscripcionPues?: Subscription;

constructor(private uiService : UiService) { 
  this.suscripcion = this.uiService.onTugle()
    .subscribe((value: any) => this.ejemploBoolean = value)

    this.suscripcionPues = this.uiService.edicionCarajo()
    .subscribe((value : any) => this.editarPagina = value)
}
  ngOnInit(): void {
  }

  editarONo(){
    this.uiService.editarONo()
  }

  onSubmit(){
    if(this.text == "" && this.title == ""){
      alert("Please write something")
    }
    else{
    const changes = {
      text: this.text,
      title: this.title
    }
    this.agregarChanges.emit(changes)
   }
  }

}
