export interface Datum {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}

export interface RootObject {
  message: string;
  data: Datum[];
}
