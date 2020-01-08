import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  today: number = Date.now();

  links = ['Estações', 'Contatos', 'Maps'];
  activeLink = this.links[0];
  background = 'primary';

  constructor() { }

  ngOnInit() {

  }

  addLink() {
    this.links.push(`Link ${this.links.length + 1}`);
  }

  Rotas(link: string) {
    switch (link) {
      case 'Estações': return '';
        break;
      case 'Contatos': return 'contatos';
        break;
      case 'Maps': return 'maps';
        break;
      default: return 'estacao-nao-encontrada';
        break;
    }
  }

}
