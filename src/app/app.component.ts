import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PatientAddComponent } from './commands/patient-add/patient-add.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pageTitle: 'Patients app';

  constructor(public dialog: MatDialog){}

  openDialog() {
    let dialogRef = this.dialog.open(PatientAddComponent, {width: '250px'});

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

}