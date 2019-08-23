import { Component, OnInit, ViewChild } from '@angular/core';
import { ModelPatient } from '../model/model-patient';
import { PatientService } from '../service/patient.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {

  patientList: ModelPatient[] = [];
  errorMessage: string = '';
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'birthDate', 'cnp', 'sex', 'city', 'country', 
        'phoneNumber'];
  dataSource = new MatTableDataSource<ModelPatient>(this.patientList);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  constructor(private patientService: PatientService) { }
  
  ngOnInit(): void{

    this.patientService.getPatients().subscribe({
      next: data => this.patientList = data,
      error: err => this.errorMessage = err
    });

    this.dataSource.paginator = this.paginator;
 
  }

}
