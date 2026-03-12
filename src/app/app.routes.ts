import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Detail } from './detail/detail';

export const routes: Routes = [
   {path:'',component:Home},
   {path:'Detail',component:Detail},
   {path: '**', redirectTo: "home", pathMatch: "full" },
];

