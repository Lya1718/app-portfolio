import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text: string = "";
  @Output() btnClick = new EventEmitter()


  constructor(
  ) { }

  ngOnInit(): void {
  }

  onClick(){
    this.btnClick.emit();
  }


  //  if (this.text == "LOGIN"){
  //   (click) => login.open
  // }
  //   if (cuentaCorrect = true){
  //       "LOGIN" => "LOGOUT"
  //  }
  //      if (this.text == "LOGOUT"){
  //          (click) => "LOGOUT" => "LOGIN"
  //     }
  //si yo le di iniciar sesion y me salio bien, que me salga  
}
