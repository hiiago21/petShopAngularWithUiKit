import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const API_URL = 'http://localhost:3000/v1';

@Injectable({
    providedIn: "root"
})
export class DataService{

    constructor(private http: HttpClient){}

    getProducts(){
        return this.http.get<any[]>(API_URL + '/products');
    }
}