export interface BartenderApplication {
  _id: string;
  firstName: string;
  lastName: string;
  employeeAddress: EmployeeAddress;
  employeeInformation: EmployeeInformation;
  employeeEmploymentPosition: EmployeeEmploymentPosition;
  employeeEducation: EmployeeEducation[];
  employeeHistory: EmployeeHistory[];
  employeeReferences: EmployeeReference[];
  employeeSignature: EmployeeSignature;
}

export interface EmployeeAddress {
  address: string;
  city: string;
  state: string;
  zip: string;
}

export interface EmployeeInformation {
  phone: string;
  emailAddress: string;
  eligibleForEmployment: boolean;
  isUsVeteran: boolean;
  backgroundCheckAgreement: boolean;
}

export interface EmployeeEmploymentPosition {
  desiredPosition: string;
  availableStartDate: string;
  desiredPay: string;
  desiredEmploymentType: string;
}

export interface EmployeeEducation {
  schoolName: string;
  location: string;
  yearsAttended: string;
  major: string;
  degreeReceived: string;
}

export interface EmployeeHistory {
  employerName: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  workPhone: string;
  startingPayRate: string;
  endingPayRate: string;
  address: string;
  city: string;
  state: string;
  zip: string;
}

export interface EmployeeReference {
  referenceEmployerName: string;
  referencePositionTitle: string;
  referenceCompanyName: string;
  referenceCompanyPhone: string;
}

export interface EmployeeSignature {
  employeeSignature: string;
  employeeSignatureDate;
}
