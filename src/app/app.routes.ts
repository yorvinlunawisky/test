import { Routes } from '@angular/router';
import { LoginComponent } from './components/views/login/login/login.component';
import { RegisterComponent } from './components/views/register/register/register.component';
import { BussinessLaunchComponent } from './components/views/dashboard/collaborator/components/services/bussiness-launch/bussiness-launch.component';
import { BussinessLaunchDetailsComponent } from './components/views/dashboard/collaborator/components/services/bussiness-launch-details/bussiness-launch-details.component';
import { FavoritesComponent } from './components/views/dashboard/collaborator/components/user/favorites/favorites.component';
import { ProfileComponent } from './components/views/dashboard/collaborator/components/user/profile/profile.component';
import { ReportsComponent } from './components/views/dashboard/collaborator/components/user/reports/reports.component';
import { CollaboratorsComponent } from './components/views/dashboard/enterprise/components/collaborators/collaborators.component';
import { DishesAndDrinksComponent } from './components/views/dashboard/provider/components/dishes-and-drinks/dishes-and-drinks.component';
import { MenuComponent } from './components/views/dashboard/provider/components/menu/menu.component';
import { UserReportsComponent } from './components/views/dashboard/provider/components/user/user-reports/user-reports.component';
import { DashboardComponent } from './components/views/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: 'ingresar',
    component: LoginComponent,
  },
  {
    path: 'registrarse',
    component: RegisterComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      // Collaborator Routes
      {
        path: 'almuerzo-empresarial',
        component: BussinessLaunchComponent,
      },
      {
        path: 'detalles-almuerzo-empresarial',
        component: BussinessLaunchDetailsComponent,
      },
      {
        path: 'favoritos',
        component: FavoritesComponent,
      },
      {
        path: 'perfil',
        component: ProfileComponent,
      },
      {
        path: 'reportes-de-colaboradores',
        component: ReportsComponent,
      },
      {
        path: 'colaboradores',
        component: CollaboratorsComponent,
      },
      // Enterprise Routes
      {
        path: 'colaboradores',
        component: CollaboratorsComponent,
      },
      {
        path: 'reportes-empresariales',
        component: ReportsComponent,
      },
      // Providers Routes
      {
        path: 'platos-y-bebidas',
        component: DishesAndDrinksComponent,
      },
      {
        path: 'menu',
        component: MenuComponent,
      },
      {
        path: 'perfil-de-usuarios',
        component: ProfileComponent,
      },
      {
        path: 'reporte-de-usuarios',
        component: UserReportsComponent,
      },
    ],
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full',
  },
];
