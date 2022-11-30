import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';
import { Portfolio } from '../interface';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  about: Portfolio[] = [];
  education: Portfolio[] = [];
  @Input() ejemploBoolean: boolean = false;
  suscripcion?: Subscription;
  editarPagina: boolean = false;

  constructor(
    private service: UiService
  ) { }

  ngOnInit(): void {

    this.service.getInfo().subscribe((about) => (
      this.about = about
    ));

    this.service.obtenerInfo().subscribe((education) => (
      this.education = education
    ));

    this.suscripcion = this.service.edicionCarajo()
      .subscribe((value: any) => this.editarPagina = value)

    this.suscripcion = this.service.onTugle()
      .subscribe((value: any) => this.ejemploBoolean = value)

  }

  deleteInfo(acerca: Portfolio) {
    this.service.deleteInfo(acerca)
      .subscribe(
        () => (
          this.about = this.about.filter((i) => {
            return i.id !== acerca.id
          })
        ))
  };

  borrar(educ: Portfolio) {
    this.service.deleteInfo(educ)
      .subscribe(
        () => (
          this.education = this.education.filter((i) => {
            return i.id !== educ.id
          })
        ))
  };

  modificarChanges(educ: Portfolio) {
    this.service.modificarChanges(educ).subscribe((educ) =>
      this.education.push(educ))
  }

  addChanges(acerca: Portfolio) {
    this.service.addChanges(acerca).subscribe((acerca) =>
      this.about.push(acerca))
  }

}
