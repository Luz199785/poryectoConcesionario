import { Component, OnInit } from '@angular/core';
import { UsuarioServiceService } from 'src/app/service/usuario-service.service';

@Component({
  selector: 'app-table-people',
  templateUrl: './table-people.component.html',
  styleUrls: ['./table-people.component.css']
})
export class TablePeopleComponent implements OnInit{
  listUsers: any[] = [];
  show: boolean = true;
  idUsuario: number = 0;

  constructor(private usuarioService: UsuarioServiceService) {}
  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.usuarioService.getAllUsers().subscribe(res => {
      this.listUsers = res.data;
      console.log(this.listUsers);
      (this.listUsers.length > 0)? this.show = false:this.show = true;
      
    });
  }

  eliminarUsuario(idUsuario: number): void {
    this.idUsuario = idUsuario;
    this.usuarioService.eliminarUsuario(this.idUsuario).subscribe(res => {
      console.log("#####", res);
      alert("Se borrara la fila.");

    });
  }

  

  


}
