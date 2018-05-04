import {RouterModule,Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {VentasComponent} from './components/ventas/ventas.component';
import {ProveedoresComponent} from './components/proveedores/proveedores.component';
import {ProductosComponent} from './components/productos/productos.component';
import {EmpleadosComponent} from './components/empleados/empleados.component';
import {ReportesComponent} from './components/reportes/reportes.component';

import {AuthGuardService} from './services/auth-guard.service';
const APP_ROUTES: Routes= [
  { path: 'login', component:LoginComponent},
  { path: 'empleados', component:EmpleadosComponent, canActivate: [AuthGuardService]},
  { path: 'ventas', component:VentasComponent,canActivate: [AuthGuardService]},
  { path: 'proveedores', component:ProveedoresComponent,canActivate: [AuthGuardService]},
  { path: 'productos', component:ProductosComponent,canActivate: [AuthGuardService]},
  { path: 'reportes', component:ReportesComponent,canActivate: [AuthGuardService]},
  {path: '**',pathMatch:'full', redirectTo:'login'}
];
export const APP_ROUTING =  RouterModule.forRoot(APP_ROUTES);
