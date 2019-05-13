import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions={
    headers:new HttpHeaders().set('content-type','application/json')
    .set('Access-control-Allow-Origin','*')
    .set('Access-control-Allow-Headers','*')
}
@Injectable(
    {
        providedIn:'root'
    }
)
export class NoteService {
//   getRequest(arg0: string, note: any[]) {
//     throw new Error("Method not implemented.");
//   }
    baseurl=environment.baseUrl;
    constructor(private http:HttpClient)
    {

    }
    public postRequest(url:any,data:any):any
    {
        return this.http.post(this.baseurl+url,data,{
            headers:new HttpHeaders().set('token',localStorage.getItem('token'))

        });
    }


    public getRequest(url:any):any
    {
        return this.http.get(this.baseurl+url,{
            headers:new HttpHeaders().set('token',localStorage.getItem('token'))
        });

    }
    
    
public putRequest(url:any,data:any):any{
    return this.http.put(this.baseurl+url,data,{
        headers:new HttpHeaders().set('token',localStorage.getItem('token'))
    });
}

}
