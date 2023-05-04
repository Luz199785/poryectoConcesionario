import { Component } from '@angular/core';
import { VentaService } from 'src/app/service/venta.service';

@Component({
  selector: 'app-table-venta',
  templateUrl: './table-venta.component.html',
  styleUrls: ['./table-venta.component.css']
})
export class TableVentaComponent {
  listVentas: any[] = [];
  show: boolean = true;

  constructor(private ventaService: VentaService) { }
  ngOnInit() {
    this.ventaService.getAllUsers().subscribe(res => {
      this.listVentas = res.data;
      console.log(this.listVentas);
      (this.listVentas.length > 0) ? this.show = false : this.show = true;


    });
  }
}
