import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CitiesCompany } from '../classes/CitiesCompany';
import { City } from '../classes/City';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  listCity:Array<City>=new Array<City>();
  newCity:City=new City();

  constructor(private http: HttpClient) { }
  url: string = "https://localhost:44337/api/City"

  //שליפת רשימת ערים
  GatAllCity():Observable<Array<City>>{
    this.newCity.CityID = 0;
    return this.http.get<Array<City>>(this.url+"/GatAllCity")}
    
  //שליפת עיר לפי קוד   
  GetIdCity(id:number):Observable<Array<City>>{
    return this.http.get<Array<City>>(this.url+"/GetIdCity"+id)}
      

  //הוספת עיר  
  GetAddCity(c:City):Observable<Array<City>>{
    this.newCity.CityID = 0;
    return this.http.put<Array<City>>(this.url+"/GetAddCity",c)}  
  
  //עדכון עיר  
  GetUpdatCity(c:City):Observable<Array<City>>{
    return this.http.post<Array<City>>(this.url+"/GetUpdatCity",c)}
  
  //מחיקת עיר  
  GetRemoveCitiesCompany(id:number):Observable<Array<CitiesCompany>>{
    return this.http.delete<Array<CitiesCompany>>(this.url+"/GetRemoveCitiesCompany/"+id)}
}
