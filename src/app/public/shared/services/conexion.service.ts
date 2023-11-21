import { Injectable } from '@angular/core';
import { IParametersFetchModel } from '../../model/parameters-fetch.model';

@Injectable({
  providedIn: 'root',
})
export class ConexionService {

  private baseUrl;

  constructor() {
    this.baseUrl = 'http://localhost:9081/api';
  }

  consumeAPI<T>(parametersFetch: IParametersFetchModel<any>): Promise<T> {
    return fetch(`${this.baseUrl}${parametersFetch.url}`, {
      method: parametersFetch.httpMethod,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(parametersFetch.body),
    })
    .then((res: Response) => {
      if(res.ok) {
        return res.json();
      }
      throw res.json();
    })
    .then((res: T) => {
      return res;
    }).catch(this.handlerError);
  }

  handlerError(error: any): Promise<any> {
    return new Promise((resolve, reject)=> {
      reject(error)
    });
  }

}
