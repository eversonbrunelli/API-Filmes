import { Filmes, IlistaFilmes } from './../models/filmes';
import { catchError, Observable, retry, throwError } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IlistaGeneros } from '../models/generos';
@Injectable({
  providedIn: 'root',
})
export class FilmesService {
  regiao = '&region=BR';
  language = '&language=pt-BR';
  baseUrl = 'https://api.themoviedb.org/3';
  apiKey = '?api_key=02b3b195466161eb33cfcfe2b3866a5a';

  constructor(private httpClient: HttpClient) {}

  //headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' }),
  };

  //metodo obter filmes
  getFilmes(): Observable<any> {
    const url = `${this.baseUrl}/movie/popular${this.apiKey}${this.language}${this.regiao}`;
    return this.httpClient
      .get<any>(url)
      .pipe(retry(2), catchError(this.handleError));
  }

  //metodo obter lista por generos
  getFilmesGenero(idgenero: string): Observable<any> {
    const url2 = `${this.baseUrl}/genre/${idgenero}/movies${this.apiKey}${this.language}${this.regiao}`;
    return this.httpClient
      .get<any>(url2)
      .pipe(retry(2), catchError(this.handleError));
  }

  //metodo filme detalhes
  getDetalhes(idfilmes: string): Observable<Filmes[]> {
    const url3 = `${this.baseUrl}/movie/${idfilmes}${this.apiKey}${this.language}${this.regiao}`;
    return this.httpClient
      .get<any>(url3)
      .pipe(retry(2), catchError(this.handleError));
  }

  //erros
  handleError(erro: HttpErrorResponse) {
    let errorMessage = '';
    if (erro.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = erro.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage =
        `Código do erro: ${erro.status}, ` + `menssagem: ${erro.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
