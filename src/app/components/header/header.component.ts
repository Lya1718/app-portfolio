import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //declaramos una función pública inicializada como array
  //cuando capture ese archivo en la variable que acabamos de declarar
  //le vamos a insertar ese valor

  ngOnInit(): void {
  }

  // tenemos que importar unas cosas

  // La comunicación asíncrona es un método de intercambio de mensajes 
  // entre dos o más partes, en la que cada parte recibe y procesa el mensaje 
  // cuando sea conveniente o posible de realizar, en vez de hacerlo 
  // inmediatamente al recibirlo.

  // La palabra clave async se añade a las funciones para que devuelvan 
  // una promesa en lugar de un valor directamente. 

  // Una función de callback es una función que se pasa a otra función 
  // como un argumento, que luego se invoca dentro de la función externa 
  // para completar algún tipo de rutina o acción.

  // las promesas nos permiten ejecutar un trozo de código, y cuando esté list
  // se devuelve, y si hay algún error, se devuelve error
  // promise recibe un resolve y un reject, resolve es como un return

  // al promise lo creamos como un objeto nuevo "new Promise (resolve, reject)"
  // al resolve de ese promise le pasamos lo que queremos que resuelva
  // si hubiera cualquier error lo devolveríamos con reject, no siempre 
  // hace falta
  // pero si le ponemos ese return new promise, nos devolvería un objeto de tipo
  // promise, no el resultado en sí, cómo resolveríamos eso
  // llamamos a la función y cuando se resuelva esa función, le implementamos
  // el método .then, que como argumento va a tener lo que queremos que se
  // resuelva
  // si te da algún error, se recoje con .catch(err => ...) y ahí haz lo que quieras
  // hacer con ese error, mostrarlo en pantalla, mandar un console.log

  //async await
  // podemos usar await en una función, y el resultado de esa función lo
  // podemos guardar en cualquier variable
  // const nombreConst = await_función()

}
