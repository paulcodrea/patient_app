import { Component, OnInit, ViewChild } from '@angular/core';
import { ModelPatient } from '../model/model-patient';
import { PatientService } from '../service/patient.service';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { PatientAddComponent } from '../commands/patient-add/patient-add.component';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {

  errorMessage: string = '';
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'birthDate', 'cnp', 'sex', 'city', 'country', 
        'phoneNumber', 'editPatient', 'deletePatient'];
  dataSource: MatTableDataSource<ModelPatient>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  constructor(private patientService: PatientService, 
              private dialog: MatDialog) { }

  
  ngOnInit(): void{
    this.patientService.getPatients().subscribe(
      patients  => {
        this.dataSource = new MatTableDataSource<ModelPatient>(patients);
        this.dataSource.paginator = this.paginator;
      }
    );
  }

}
