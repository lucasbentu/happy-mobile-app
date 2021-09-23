import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Cadastrar um Orfanato', url: '/folder/Cadastrar', icon: 'heart' },
    { title: 'Buscar por um orfanato', url: '/folder/Buscar', icon: 'search' },
  ];

  public labels = ['Familia', 'Amigos', 'Anotações', 'Trabalho'];
  constructor() {}
}
