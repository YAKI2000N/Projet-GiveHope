import { Injectable } from '@angular/core';
import {Medicament} from './Medicament';
import { catchError,map } from 'rxjs/operators';
import { Observable,throwError } from 'rxjs';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';

// user class 
export class User{

  name!:String ;
  email!:String;
  password!:String;

}

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private tokenKey = 'token';
 



  REST_API: string = 'http://127.0.0.1:8000/api/medicament' ; 
  httpHeaders= new HttpHeaders().set('Content-Type','application/json');
  constructor(private httpClient: HttpClient){

  }

  addMedicament(data:FormData):Observable<any>{
    const options = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    };
    

    let API_URL= `${this.REST_API}` ;
    return this.httpClient.post(API_URL,data).pipe(catchError(this.handleError))
  }

  getMedicaments(){
    return this.httpClient.get(`${this.REST_API}`);

  }
  getMedicament (id: any):Observable<any>{

    let API_URL= `${this.REST_API}/${id}` ;
    return this.httpClient.get(API_URL,{headers:this.httpHeaders}).pipe(map((res:any)=>{
      return res || {}
    }),
      catchError(this.handleError))
  }

  deleteMedicament(id:any):Observable<any>{

    let API_URL = `${this.REST_API}/${id}` ;
    return this.httpClient.delete(API_URL,{headers: this.httpHeaders}).pipe(catchError(this.handleError));
  }


    updateMedicament(id:any, data:Medicament):Observable<any>{

      let API_URL = `${this.REST_API}/${id}` ;
      return this.httpClient.put(API_URL,data,{headers: this.httpHeaders}).pipe(catchError(this.handleError));
    }

  

    handleError(error:HttpErrorResponse){
      let errorMessage = '' ;
      if ( error.error instanceof ErrorEvent){
        errorMessage =error.error.message ;

      }else {
        errorMessage=`Error Code : ${error.status}\n Message: ${errorMessage}`
      }
      console.log(errorMessage);

      return throwError(errorMessage);
    }

    registerUser(data:any){
      return this.httpClient.post('http://127.0.0.1:8000/api/register',data);


    }

    isLoggedIn(){

      return !!localStorage.getItem (this.tokenKey) ;

    }


 login(data:any){
  return this.httpClient.post('http://127.0.0.1:8000/api/login',data)


 } 
 
 getImage(filename: string) {

var  filepng= filename.split('/').pop();
 console.log(`http://localhost:8000/api/medicament_images/${filepng}`)
  return this.httpClient.get(`http://localhost:8000/api/medicament_images/${filepng}`, { responseType: 'blob' });
}

 uploadFile(event: any) {
  const file = event.target.files[0];
  const formData = new FormData();
  formData.append('file', file);
  this.httpClient.post('http://localhost:3000/upload', formData).subscribe((response) => {
    console.log(response);
  });
}
}





