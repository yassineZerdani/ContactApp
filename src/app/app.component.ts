import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Mes Contacts', url: '/liste-contacts'},
    { title: 'Ajouter un contact', url: '/ajouter-contact'},
    { title: 'Profile', url: '/profile'},
    { title: 'Déconnexion', url: '/deconnexion'},
    { title: 'Inscription', url: '/inscription'},
    { title: 'Login', url: '/login'},
  ];
  constructor() {}
}
