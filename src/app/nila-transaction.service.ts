import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Agreement} from './agreement.model';
import { HttpModule } from '@angular/http';

@Injectable()
export class NilaTransactionService {

  constructor(private http: HttpClient) { }

  generateDocument(agreement: Agreement){
    console.log('inside generateDocument:::'+agreement);
    return this.http.post('nila/api/generatePdf', agreement);
  }
}
