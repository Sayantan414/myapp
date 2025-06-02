import { Routes } from '@angular/router';
import { HomeComponent } from './main/pages/home/home.component';
import { LayoutComponent } from './main/pages/layout/layout.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent, title: 'Dashboard',
        children: [
            { path: 'home', component: HomeComponent, title: 'home' },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'cob', loadComponent: () => import('./main/pages/cob/cob.component').then((m) => m.CobComponent), title: 'cob' },
            { path: 'bf', loadComponent: () => import('./main/pages/bf/bf.component').then((m) => m.BfComponent), title: 'bf' },
            { path: 'pbs', loadComponent: () => import('./main/pages/pbs/pbs.component').then((m) => m.PbsComponent), title: 'pbs' },
            { path: 'sinter', loadComponent: () => import('./main/pages/sinter/sinter.component').then((m) => m.SinterComponent), title: 'sinter' },

        ]
    },

];
