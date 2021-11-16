import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  produtos : any = [ {
    "ID" : 1,
    "Nome": "Solid State Drive",
    "Categoria": 100,
    "Quantidade":50
  },
  {
    "ID":2,
    "Nome": "Monitor",
    "Categoria":101,
    "Quantidade":20
  }
];
  constructor() { }

  ngOnInit(): void {
  }

}
