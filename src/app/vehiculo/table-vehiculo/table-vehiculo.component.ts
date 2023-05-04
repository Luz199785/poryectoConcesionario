import { Component } from '@angular/core';
import { VehiculoService } from 'src/app/service/vehiculo.service';
import { VentaService } from 'src/app/service/venta.service';

@Component({
  selector: 'app-table-vehiculo',
  templateUrl: './table-vehiculo.component.html',
  styleUrls: ['./table-vehiculo.component.css']
})
export class TableVehiculoComponent {
  listVehiculo: any[] = [];
  show: boolean = true;

  constructor(private vehiculoService: VehiculoService) { }
  ngOnInit() {
    this.vehiculoService.getAllUsers().subscribe(res => {
      this.listVehiculo = res.data;
      console.log(this.listVehiculo);
      (this.listVehiculo.length > 0) ? this.show = false : this.show = true;


    });
  }
}
