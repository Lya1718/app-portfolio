import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  @Input() ejemploBoolean: boolean = false;
  suscripcion: Subscription;


  constructor(private uiService : UiService) { 
    this.suscripcion = this.uiService.onTugle()
      .subscribe((value: any) => this.ejemploBoolean = value)
  }

  ngOnInit(): void {
  }

}
