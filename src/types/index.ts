export type Address = {
  district: string;
  city: string;
  street: string;
  state: string;
  number: string;
  cep: string;
};

export enum EnterprisePurpose {
  HOME = "HOME",
  BUSINESS = "BUSINESS",
}

export enum EnterpriseStatus {
  RELEASE = "RELEASE",
  RELEASE_SOON = "RELEASE_SOON",
  READY = "READY",
  IN_CONSTRUCTION = "IN_CONSTRUCTION",
}

export type Enterprise = {
  _id: string;
  name: string;
  status: EnterpriseStatus;
  purpose: EnterprisePurpose;
  ri_number: string;
  address: Address;
};
