export interface Reservation {

  inquiry_id: string;
  first_name: string;
  last_name: string;
  day_phone_number: string;
  email_address: string;
  requested_party_size: number;
  desired_date: string;
  desired_time: string;
  contact_time_id: string;
  inquiry_type_id: string;
  inquiry_submission_timestamp: string;
  message: string;
  confirmation_status: boolean;
}
