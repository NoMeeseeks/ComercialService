import { Routes } from '@angular/router';
import { SkeletonComponent } from '@layout/skeleton/skeleton.component';

export const routes: Routes = [
    {
        path: 'web',
        component: SkeletonComponent,
        children: [
            {
                path: 'admin',
                loadChildren: () => import('@modules/admin/admin.routes').then(m => m.routes)
            },
            {
                path: 'home',
                loadChildren: () => import('@modules/home/home-routing.module').then(m => m.routes)
            },
            {
                path: '**',
                redirectTo: 'dashboard'
            }

        ]
    },
];
