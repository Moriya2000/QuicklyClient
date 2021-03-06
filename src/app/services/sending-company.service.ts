import { HttpClient } from '@angular/common/http';
import { rendererTypeName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AllDetailsCompanyComponent } from '../all-details-company/all-details-company.component';
import { AllDetailsCompany } from '../classes/AllDetailsCompany';
import { SendingCompany } from '../classes/SendingCompany';

@Injectable({
  providedIn: 'root'
})
export class SendingCompanyService {

  listCompany: Array<SendingCompany> = new Array<SendingCompany>()
  newCompany: AllDetailsCompany = new AllDetailsCompany();
  
  Company:AllDetailsCompany=new AllDetailsCompany();
  
  companyConected:AllDetailsCompany=new AllDetailsCompany();
  currentCompany:SendingCompany=new SendingCompany();

  public conected:boolean=false;
  
  // listAllCompany: Array<AllDetailsCompany> = new Array<AllDetailsCompany>()


  constructor(private http: HttpClient) { }
  url: string = "https://localhost:44337/api/SendingCompany"

  //שליפת רשימת חברות שליחויות
  GatAllSendingCompany():Observable<Array<SendingCompany>>{
    return this.http.get<Array<SendingCompany>>(this.url+"/GatAllSendingCompany")}
            
  //שליפת חברת שליחויות לפי קוד   
  GetIdAllDetailsCompany():Observable<AllDetailsCompany>{
    return this.http.get<AllDetailsCompany>(this.url+"/GetIdAllDetailsCompany/"+this.newCompany.CompanyNumber)}
              
  //הוספת חברת שליחויות 
  GetAddSendingCompany(c:SendingCompany):Observable<Array<SendingCompany>>{
    return this.http.put<Array<SendingCompany>>(this.url+"/GetAddSendingCompany",c)}
    
  //הוספת כל פרטי החברת שליחויות  
  GetAddAllDetailsCompany(c:AllDetailsCompany):Observable<Array<AllDetailsCompany>>{
    return this.http.put<Array<AllDetailsCompany>>(this.url+"/GetAddAllDetailsCompany",c)}
  
    //עדכון חברת שליחויות  
  GetUpdatSendingCompany(c:SendingCompany):Observable<Array<SendingCompany>>{
    return this.http.post<Array<SendingCompany>>(this.url+"/GetUpdatSendingCompany",c)}
  
    //עדכון כל הפרטים של חברת שליחויות  
  GetUpdatSendingCompany1(c:AllDetailsCompany):Observable<Array<AllDetailsCompany>>{
    return this.http.post<Array<AllDetailsCompany>>(this.url+"/GetUpdatSendingCompany1",c)} 
  
    //מחיקת חברת שליחויות  
  GetRemoveSendingCompany():Observable<Array<SendingCompany>>{
    return this.http.delete<Array<SendingCompany>>(this.url+"/GetRemoveSendingCompany/"+this.companyConected.CompanyNumber)}
  
  //בדיקה האם המשתמש קיים במערכת
  GetCompanyNumberPassword(companyNumber:number,password:string):Observable<number>{
    return this.http.get<number>(this.url+"/GetCompanyNumberPassword/" + companyNumber + "/" + password)}

    // GatAllSendingCompanyByNumberPassword(companyNumber:number,password:string):Observable<SendingCompany>{
    //   return this.http.get<SendingCompany>(this.url+"/GatAllSendingCompanyByNumberPassword/" + companyNumber + "/" + password)}
    GatAllSendingCompanyByNumberPassword(SendingCompanyID:number):Observable<SendingCompany>{
    return this.http.get<SendingCompany>(this.url+"/GatAllSendingCompanyByNumberPassword/" +SendingCompanyID)}
}    
