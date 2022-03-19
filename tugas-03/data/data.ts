export type Ticket = {
  id: number;
  src: string;
  dst: string;
  provider: string;
  date: Date;
  minPrice: number;
  maxPrice: number;
  currency: string;
};
