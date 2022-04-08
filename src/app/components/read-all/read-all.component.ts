import { Component, OnInit } from '@angular/core';
import { Filmes } from 'src/app/models/filmes';
import { FilmesService } from 'src/app/services/filmes.service';

@Component({
  selector: 'app-read-all',
  templateUrl: './read-all.component.html',
  styleUrls: ['./read-all.component.css'],
})
export class ReadAllComponent implements OnInit {
  panelOpenState = false;

  lista: Filmes[] = [];
  erro: any;
  patch: String = 'https://image.tmdb.org/t/p/w500/';

  constructor(private filmesServices: FilmesService) {}

  ngOnInit(): void {
    this.getFilmes();
  }

  getFilmes() {
    this.filmesServices.getFilmes().subscribe(
      (data) => {
        this.lista = data.results.slice(0, 20);
        console.log('O Objeto que recebemos', data);
        console.log('A variavel', this.lista);
      },
      (error) => {
        this.erro = error;
        console.error('erro', error);
      }
    );
  }
}
