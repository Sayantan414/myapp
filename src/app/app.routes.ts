import { Routes } from '@angular/router';
import { HomeComponent } from './main/pages/home/home.component';
import { LayoutComponent } from './main/pages/layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent, title: 'Dashboard',
        children: [
            { path: 'home', component: HomeComponent, title: 'home' },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
        ]
    },

];
