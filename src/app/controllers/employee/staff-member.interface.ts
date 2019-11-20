export interface StaffMember {

  _id: string;
  firstName: string;
  lastName: string;
  employeeDetails: EmployeeDetails;

}

export interface EmployeeDetails {

  emailAddress: string;
  phoneNumber: string;
  staffPosition: string;
  employeeSummary: string;
  profileImage: string;
}
