import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class gettingRecord{
    private _url="https://hn.algolia.com/api/v1/search_by_date?tags=story ";
    constructor(private http:HttpClient) { }
    getRecord():Observable<any>{
         return this.http.get<any>(this._url)
    }
    }
    

