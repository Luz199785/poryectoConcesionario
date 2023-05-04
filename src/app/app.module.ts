import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './templates/menu/menu.component';
import { FormPeopleComponent } from './people/form-people/form-people.component';
import { TablePeopleComponent } from './people/table-people/table-people.component';
import { FormConcesionarioComponent } from './concesionario/form-concesionario/form-concesionario.component';
import { TableConcesionarioComponent } from './concesionario/table-concesionario/table-concesionario.component';
import { HttpClientModule } from '@angular/common/http';
import { FormVehiculoComponent } from './vehiculo/form-vehiculo/form-vehiculo.component';
import { TableVehiculoComponent } from './vehiculo/table-vehiculo/table-vehiculo.component';
import { FormVentaComponent } from './venta/form-venta/form-venta.component';
import { TableVentaComponent } from './venta/table-venta/table-venta.component';
import { NavPeopleComponent } from './people/nav-people/nav-people.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FormPeopleComponent,
    TablePeopleComponent,
    FormConcesionarioComponent,
    TableConcesionarioComponent,
    FormVehiculoComponent,
    TableVehiculoComponent,
    FormVentaComponent,
    TableVentaComponent,
    NavPeopleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
