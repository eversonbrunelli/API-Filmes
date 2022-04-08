import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Detalhes } from 'src/app/models/detalhes';
import { Filmes } from 'src/app/models/filmes';
import { FilmesService } from 'src/app/services/filmes.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  lista: any;
  idfilmes = '';
  erro: any;
 
  patch: String = "https://image.tmdb.org/t/p/w500/";


  constructor(private filmesServices: FilmesService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.idfilmes = this.route.snapshot.paramMap.get('idfilmes')!;
    this.getDetalhes();
    
  }

  getDetalhes(): void {
    this.filmesServices.getDetalhes(this.idfilmes).subscribe((resposta) => {
      this.lista = resposta;
      console.log(this.lista);
    });
  }
  

}
