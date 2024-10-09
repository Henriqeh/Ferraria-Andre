import { Component } from '@angular/core';
import { FormControl, FormGroup, NgModel } from '@angular/forms';
import { UsuarioService } from '../usuario.service';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-cad-produto',
  templateUrl: './cad-produto.component.html',
  styleUrl: './cad-produto.component.scss'
})
export class CadProdutoComponent {
  formulario = new FormGroup({
    nome : new FormControl(''),
    preco : new FormControl(''),
    fabricante : new FormControl(''),
    descricao : new FormControl(''),
    tipo : new FormControl(''),
  })
  constructor(
    private produtoService:ProdutoService){
  }
  
  OnSave(){
    let dados = this.formulario.value
    this.produtoService.salvar(dados).subscribe({
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
  
