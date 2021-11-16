import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-contatos',
  templateUrl: './lista-contatos.component.html',
  styleUrls: ['./lista-contatos.component.css']
})
export class ListaContatosComponent implements OnInit {

  contatos = [
    {id:1, name: 'Paul', email:'p_ackman@cmu.co.uk'},
    {id:2, name: 'Sam', email:'s_smith@cmu.co.uk'},    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
