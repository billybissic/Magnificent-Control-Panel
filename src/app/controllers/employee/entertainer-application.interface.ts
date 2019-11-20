export interface EntertainerApplication {
  _id: string;
  firstName: string;
  lastName: string;
  employeeAddress: EmployeeAddress;
  entertainerInformation: EntertainerInformation;
  entertainerExperiences: EntertainerExperience[];
  employeeSignature: EmployeeSignature;
}

export interface EmployeeAddress {
  address: string;
  city: string;
  state: string;
  zip: string;
}

export interface EntertainerInformation {
  phone: string;
  hireDate: string;
  emergencyContacts: EmergencyContact[];
  identification: Identification;
  stageName: string;
  highestLevelOfEducation: string;
  hasDancedBefore: boolean;
}

export interface EmergencyContact {
  firstName: string;
  lastName: string;
  phone: string;
}

export interface Identification {
  driversLicenseNumber: string;
  birthday: Date;
  age: number;
}

export interface EntertainerExperience {
  nameOfVenue: string;
  city: string;
  state: string;
  lengthOfEmploymentYear: number;
  lengthOfEmploymentMonth: number;
}

export interface EmployeeSignature {
  employeeSignature: string;
  employeeSignatureDate: Date;
}
