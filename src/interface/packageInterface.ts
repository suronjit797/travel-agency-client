export interface IPackage {
  id: string;
  title: string;
  destination: string;
  country: string;
  continent: string;
  duration: string;
  date: string;
  amount: number;
  lastBookingDate: string;
  image: string;
  ratings: number;
  type:   'LUXURY' | 'BUDGET';
  status: 'AVAILABLE' | 'UPCOMING';
  createdAt: string;
  updatedAt: string;
}
