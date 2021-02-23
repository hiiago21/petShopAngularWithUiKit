import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "../models/product.model";

const API_URL = 'http://localhost:3000/v1';

@Injectable({
    providedIn: "root"
})
export class DataService{

    constructor(private http: HttpClient){}

    composeHeaders(){
        const token = localStorage.getItem("petshop.token");
        const headers = new HttpHeaders().set('Authorization', `bearer ${token}`);
        return headers
    }

    getProducts(){
        return this.http.get<Product[]>(API_URL + '/products');
    }

    authenticate(data){
        return this.http.post(API_URL + '/accounts/authenticate', data);
    }

    refreshToken(){
        return this.http.post(API_URL + '/accounts/refresh-token', null, {headers: this.composeHeaders()});
    }
}