import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../classes/Client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  listClient: Array<Client> = new Array<Client>()
  newClient: Client = new Client();
  clientConected:Client=new Client();
  
  public conected:boolean=false;
  typeUserClient:boolean=false;
  typeUserCompany:boolean=false;



  constructor(private http: HttpClient) { }
  url: string = "https://localhost:44337/api/Client"

  //הוספת לקוח חדש
  GetAddClient(): Observable<Array<Client>> {
    this.newClient.IdClient = 0;
    let currentUrl = this.url + "/GetAddClient"
    return this.http.put<Array<Client>>(currentUrl, this.newClient)}

  //בדיקה האם המשתמש קיים במערכת
  GetEmailAddressPassword(emailAdress:string,password:string):Observable<number>{
    return this.http.get<number>(this.url+"/GetEmailAddressPassword/" + emailAdress + "/" + password)}

  //IDפונקצייה שמקבלת כתובת מייל וסיסמא ושולפת לפי זה את ה
  GetEmailAddressPasswordID(emailAdress:string,password:string):Observable<number>{
    return this.http.get<number>(this.url+"/GetEmailAddressPasswordID/" + emailAdress + "/" + password)}
    
  GetRemoveClient(id:number):Observable<Array<Client>>{
    return this.http.delete<Array<Client>>(this.url+"/GetRemoveClient/"+id)}
}



