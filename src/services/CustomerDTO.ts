class CustomerDTO {
  id?: number;
  user_id?: string;
  name: string;
  phoneNumber: string;
  email: string;
  address: string;
  communicationPreference: string;
  note: string;
  created_date?: Date;
  updated_date?: Date;
  phone?:string;

  constructor(
    id: number | undefined,
    user_id: string | undefined,
    name: string,
    phoneNumber: string,
    email: string,
    address: string,
    communicationPreference: string,
    note: string,
    created_date?: Date,
    updated_date?: Date
  ) {
    this.id = id;
    this.user_id = user_id;
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.address = address;
    this.communicationPreference = communicationPreference;
    this.note = note;
    this.created_date = created_date;
    this.updated_date = updated_date;
    this.phone = phoneNumber;
  }
}

export default CustomerDTO;