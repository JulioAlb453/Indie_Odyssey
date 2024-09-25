import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Asegúrate de que HomeComponent esté importado
import { AbountComponent } from './abount/abount.component'; // Asegúrate de que AbountComponent esté importado

const routes: Routes = [
  { path: 'home', component: HomeComponent }, // Elimina el redireccionamiento
  { path: 'about', component: AbountComponent }, // Asegúrate de que la ruta sea correcta (posiblemente deberías corregir 'abount' a 'about')
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirecciona a 'home' por defecto
  { path: '**', redirectTo: '/home' } // Captura cualquier ruta no encontrada
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), // Solo debe estar aquí
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
