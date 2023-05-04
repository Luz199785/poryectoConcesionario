import { Component } from '@angular/core';
import { ConcesionarioService } from 'src/app/service/concesionario.service';

@Component({
  selector: 'app-table-concesionario',
  templateUrl: './table-concesionario.component.html',
  styleUrls: ['./table-concesionario.component.css']
})
export class TableConcesionarioComponent {
  listConcesionario: any[]=[];
  show:boolean = true;

  constructor(private concesionarioService: ConcesionarioService) {}
  ngOnInit() {
    this.concesionarioService.getAllUsers().subscribe(res => {
      this.listConcesionario = res.data;
      console.log(this.listConcesionario);
      (this.listConcesionario.length > 0)? this.show = false:this.show = true;
      
  
    });
  }
}
