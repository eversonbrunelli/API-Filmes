import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Generos } from 'src/app/models/generos';
import { FilmesService } from 'src/app/services/filmes.service';

@Component({
  selector: 'app-generos',
  templateUrl: './generos.component.html',
  styleUrls: ['./generos.component.css'],
})
export class GenerosComponent implements OnInit {
  panelOpenState = false;

  idgenero = '';
  lista: Generos[] = [];
  erro: any;
  patch: String = 'https://image.tmdb.org/t/p/w500/';

  constructor(
    private filmesServices: FilmesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.idgenero = this.route.snapshot.paramMap.get('idgenero')!;
    this.getFilmesGenero();
  }

  getFilmesGenero(): void {
    this.filmesServices.getFilmesGenero(this.idgenero).subscribe(
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
