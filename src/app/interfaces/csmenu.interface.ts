export interface Datum {
  id: number;
  name: string;
  icon: string;
}

export interface RootObject {
  message: string;
  data: Datum[];
}
