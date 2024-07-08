import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'app',
        children: [
            {
                path: 'home',
                title: 'Menu Inicial',
                loadComponent: () => import('@modules/home/pages/home/home.component')
            },
            {
                path: '**',
                redirectTo: 'home'
            }

        ]
    },
];
