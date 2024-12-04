import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./Components/Login/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'add',
        loadComponent: () => import('./Components/Add/add-plantas/add-plantas.component').then(m => m.AddPlantasComponent)
    },
    {
        path: 'cant',
        loadComponent: () => import('./Components/Cant/cant-agua/cant-agua.component').then(m => m.CantAguaComponent)
    },
    {
        path: 'inventario',
        loadComponent: () => import('./Components/Inventario/tus-plantas/tus-plantas.component').then(m => m.TusPlantasComponent)
    },
    {
        path: 'notis',
        loadComponent: () => import('./Components/Notis/notificaciones/notificaciones.component').then(m => m.NotificacionesComponent)
    },
    {
        path:'**',
        redirectTo:'',
        pathMatch:'full'
    }
];