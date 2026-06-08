import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'padawan-topics',
    loadComponent: () =>
      import('./padawan-topics/padawan-topics').then((component) => component.PadawanTopics),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'padawan-topics',
  },
];
