
import { ModelPatient } from './model-patient';
import { AppointmentType } from '../enums/appointment-type.enum';
import { AppointmentStatus } from '../enums/appointment-status.enum';


export interface ModelAppointment {
    id: number;
    appointmentType: AppointmentType;
    appointmentStatus: AppointmentStatus;
    startTime: Date;
    endTime: Date;
    description: string;
    patient: ModelPatient;
}
