import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_RADIO_DEFAULT_OPTIONS, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PatientService } from 'src/app/service/patient.service';


@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.scss']
})
export class PatientAddComponent implements OnInit {

  options: FormGroup;

  constructor(private fb: FormBuilder, private patientService: PatientService, private dialogRef: MatDialogRef<PatientAddComponent>){}

  ngOnInit() {
    this.options = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required],
      cnp: ['', Validators.required],
      sex: [''],
      city: [''],
      country: [''],
      phoneNumber: ['', [Validators.required, Validators.minLength(10)]]
      // submitPatient: true
    });
  }

  closeDialog(){
    this.dialogRef.close();
  }

  createPatient() {
    this.patientService.createPatient(this.options.value).subscribe(
      patients  => {
        this.dialogRef.close()
      });
  }

}
