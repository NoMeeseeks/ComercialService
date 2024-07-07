import { Routes } from '@angular/router';
import { SkeletonComponent } from '@layout/skeleton/skeleton.component';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { AboutComponent } from '@modules/about/pages/about/about.component';
import { ContactComponent } from '@modules/contact/pages/contact/contact.component';

export const routes: Routes = [
    {
        path: 'app',
        component: SkeletonComponent,
        children: [
            {
                path: 'home',
                loadChildren: () => import('@modules/home/home-routing.module').then(m => HomeComponent)
            },
            {
                path: '**',
                redirectTo: 'home'
            }
            // {
            //     path: 'about',
            //     loadChildren: () => import('@modules/about/about-routing.module').then(m => AboutComponent)
            // },
            // {
            //     path: 'contact',
            //     loadChildren: () => import('@modules/contact/contact-routing.module').then(m => ContactComponent)
            // },
        ]
    },
    {
        path: '**',
        redirectTo: 'app'
    }
];
