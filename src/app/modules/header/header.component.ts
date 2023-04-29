import { Component, OnInit } from '@angular/core';
import { HeaderRoutes } from 'src/app/shared/interfaces/header-routes.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  headerRoutes: HeaderRoutes[] = [
    { route: '/', name: 'Apresentação' },
    { route: '/experience', name: 'Experiência' },
    { route: '/projects', name: 'Projetos' },
    { route: '/skills', name: 'Habilidades' },
  ];

  constructor() {}

  ngOnInit() {}

  goToHome() {}

  goToPresentation() {
    console.log('Eai');
  }

  goToExperience() {
    console.log('Eai');
  }

  goToProjects() {}

  goToSkills() {}
}
