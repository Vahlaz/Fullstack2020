export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy';

export type Visibility = 'great' | 'good' | 'ok' | 'poor';

export type NoSsnPatient = Omit<Patient, 'ssn'>

export interface Diagnose {
    code: string,
    name: string,
    latin?: string
  }

export interface Patient {
    id: string,
    name: string,
    dateOfBirth: string,
    ssn: string,
    gender: string,
    occupation: string
}   
