import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsuarioServiceService } from 'src/app/service/usuario-service.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit{

  actualizarForm!: FormGroup;

  constructor(
    private userService: UsuarioServiceService,
  
  ) { }

  ngOnInit(): void {
    this.actualizarForm = new FormGroup({
      idUsuario: new FormControl(''),
      nombre: new FormControl(''),
      apellido: new FormControl(''),
      correo: new FormControl(''),
      identificacion: new FormControl(''),
      telefono: new FormControl(''),
      direccion: new FormControl('')

    });

  }

  actualizarUsuario() {
    const data = this.actualizarForm.value;
    this.userService.actualizarUsuario(data).subscribe(res => {
      console.log(res)
      if (res.status != "ACCEPTED") {
        alert('Hubo un error');
      } else {
        alert("Actualizacion Exitosa");
        alert("Recargar la pagina.");
      }
    });
  }

}
