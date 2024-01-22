import { Injectable } from '@angular/core';
import { Result, ResultDetail } from '../Clases/mapeo';

@Injectable({
  providedIn: 'root'
})
export class OTMService {

  apikey = "5ae2e3f221c38a28845f05b6d98b494f1ef1e3e8a64c4c98aa1e7866"
  baseUrl = "https://api.opentripmap.com/0.1/en/"

  constructor() { }

  async searchPlace(term:string): Promise<Result>{
    const url = `${this.baseUrl}places/autosuggest?name=${term}&radius=12742000&lon=-73.0336522&lat=-36.9248235&rate=3&limit=5&apikey=${this.apikey}`;

    const result = await fetch(url)
    const data = await result.json()
    return data


  }

  async searchSource(src:string): Promise<ResultDetail>{
    const url = `${this.baseUrl}places/xid/${src}?&apikey=${this.apikey}`;

    const result = await fetch(url)
    const data = await result.json()
    return data


  }




}
