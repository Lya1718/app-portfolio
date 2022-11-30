import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  @Input() ejemploBoolean: boolean = false;
  suscripcion: Subscription;

  constructor(private uiService : UiService) { 
    this.suscripcion = this.uiService.onTugle()
      .subscribe((value: any) => this.ejemploBoolean = value)
  }
  ngOnInit(): void {
  }

}
