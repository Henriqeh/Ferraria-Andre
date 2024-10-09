import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-cad-usuario',
  templateUrl: './cad-usuario.component.html',
  styleUrl: './cad-usuario.component.scss'
})
export class CadUsuarioComponent {
  formulario = new FormGroup({
   usuario  : new FormControl(''),
   nome : new FormControl(''),
   sobrenome : new FormControl(''),
   email : new FormControl(''),
   telefone: new FormControl(''),
   endereco : new FormControl(''),
   datanasci: new FormControl(''),
  })
  constructor(private usuarioService:UsuarioService){
  }
  
  OnSave(){
    let dados = this.formulario.value
    this.usuarioService.salvar(dados).subscribe({
      next:(res)=>{
        console.log(res)
      },
      error:(error)=>{
  
      }
      
    })
  }
  OnCancelar(){
    this.formulario.reset()
  }
  }
  