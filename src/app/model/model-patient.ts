import { PatientSex } from '../enums/patient-sex.enum';

export interface ModelPatient {
    id: number;
    firstName: string;
    lastName: string;
    birthDate: Date;
    cnp: string;
    sex: PatientSex;
    city: string;
    country: string;
    phoneNumber: number;
}