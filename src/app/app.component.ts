import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Mes Contacts', url: '/liste-contacts', icon: 'mail' },
    { title: 'Recommandations', url: '/liste-contacts', icon: 'paper-plane' },
    { title: 'Profile', url: '/profile', icon: 'heart' },
    { title: 'Déconnexion', url: '/authentification', icon: 'archive' },
  ];
  constructor() {}
}
