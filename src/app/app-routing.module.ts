import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormConcesionarioComponent } from './concesionario/form-concesionario/form-concesionario.component';
import { FormVehiculoComponent } from './vehiculo/form-vehiculo/form-vehiculo.component';
import { FormVentaComponent } from './venta/form-venta/form-venta.component';
import { NavPeopleComponent } from './people/nav-people/nav-people.component';
import { TablePeopleComponent } from './people/table-people/table-people.component';
import { ActualizarComponent } from './people/fomularios/actualizar/actualizar.component';
import { AgregarComponent } from './people/fomularios/agregar/agregar.component';

const appRoutes: Routes = [

  //Path usuarios
  {path: 'usuarios', component: NavPeopleComponent},
  {path: 'formActualizar', component: ActualizarComponent},
  {path: 'formAgregar', component: AgregarComponent},
  {path: 'table-people', component: TablePeopleComponent},

  //Path concesionarios
  {path: 'concesionarios', component: FormConcesionarioComponent},

  //Path vehiculos
  {path: 'vehiculos', component: FormVehiculoComponent},

  //Path ventas
  {path: 'ventas', component: FormVentaComponent},
  



];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
