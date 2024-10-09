import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsuarioService } from '../usuario.service';
import { MovimentacaoService } from '../movimentacao.service';

@Component({
  selector: 'app-mov-produto',
  templateUrl: './mov-produto.component.html',
  styleUrl: './mov-produto.component.scss'
})
export class MovProdutoComponent {
formulario = new FormGroup({
    id : new FormControl(''),
    datamov : new FormControl(''),
    produto : new FormControl(''),
    quantidade  : new FormControl(''),
    tipo  : new FormControl(''),
    usuario  : new FormControl(''),
}) 
constructor(private movimentacaoService:MovimentacaoService){
}

OnSave(){
  let dados = this.formulario.value
  this.movimentacaoService.salvar(dados).subscribe({
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
