import { Routes } from '@angular/router';
import { SkeletonComponent } from '@layout/skeleton/skeleton.component';

export const routes: Routes = [
    {
        path: 'web',
        component: SkeletonComponent,
        children: [
            {
                path: 'home',
                loadChildren: () => import('@modules/home/home-routing.module').then(m => m.routes)
            },
            {
                path: 'about',
                loadChildren: () => import('@modules/about/about-routing.module').then(m => m.routes)
            },
            {
                path: 'contact',
                loadChildren: () => import('@modules/contact/contact-routing.module').then(m => m.routes)
            },
            {
                path: '**',
                redirectTo: 'home'
            }

        ]
    },
    {
        path: 'admin',
        loadChildren: () => import('@modules/admin/admin.routes').then(m => m.routes)
    },
    {
        path: '**',
        redirectTo: 'web'
    }
];
