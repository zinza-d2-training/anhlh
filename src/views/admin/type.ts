export interface Register {
  id: number;
  group: Group;
  healthInsurance: string;
  job: string;
  workUnit: string;
  currentAddress: string;
  dateInjection: string;
  sessionInjection: SessionDay;
}
export interface Group {
  name: string;
}
export interface HeadersDocument {
  text: string;
  value: string;
  align?: string;
  width?: string;
  filterable?: boolean;
}
export interface DessertsDocument {
  id: number;
  name: string;
  actions?: string;
}
export interface SessionDay {
  id: number;
  name: string;
}
