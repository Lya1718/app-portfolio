import { Component, OnInit, Input, Output } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  @Output() text: string = "";
  ejemploBoolean: boolean = false;
  subscription?: Subscription;
  showAddUser: boolean = false;
  suscripcion?: Subscription;

  constructor(
    private service: UiService,
  ) {
    this.subscription = this.service.onToggle()
      .subscribe((value: any) => this.showAddUser = value)

    this.suscripcion = this.service.onTugle()
      .subscribe((value: any) => this.ejemploBoolean = value)
  }

  ngOnInit(): void {
  }

  textote(): void{
    if(this.text == "LOGIN"){
      this.ejemploBoolean = true;
     }
  }

  toogleAddUser(): void {
    this.textote();
    this.service.toogleAddUser();
  }

}
