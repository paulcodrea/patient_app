import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ModelPatient } from '../model/model-patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private patientUrl = 'http://localhost:8080/patient';

  constructor(private http: HttpClient) {}  

  getPatients(): Observable<ModelPatient[]>{
    // console.log(this.http.get<ModelPatient[]>(this.patientUrl));

    return this.http.get<ModelPatient[]>(this.patientUrl);
  }

  // addPatient(newPatient: ModelPatient): Observable<ModelPatient[]>{
  //   return this.http.post<ModelPatient[]>(this.patientUrl, newPatient, {
  //     headers: new HttpHeaders({'Content-Type': 'application/json'})
  //   });
  // }

  // updatePatient(updatedPatient: ModelPatient): Observable<void>{
  //   return this.http.put<void>(`http://localhost:8080/patient/${updatedPatient.id}`, updatedPatient, {
  //     headers: new HttpHeaders({'Content-Type': 'application/json'})
  //   });
  // }

  // deletePatient(patientId: number): Observable<void>{
  //   return this.http.delete<void>(`http://localhost:8080/patient/${patientId}`);
  // }

  
  private handleError(err: HttpErrorResponse) {

    let errorMessage = '';

    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }

    console.error(errorMessage);

    return throwError(errorMessage);
  }
}
