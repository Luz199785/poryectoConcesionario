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

  constructor(private usuarioService: UsuarioServiceService) {}
  ngOnInit() {
    this.usuarioService.getAllUsers().subscribe(res => {
      this.listUsers = res.data;
      console.log(this.listUsers);
      (this.listUsers.length > 0)? this.show = false:this.show = true;
      
    });
  }

  

  


}
