export interface IReservation {
  _id: string;
  userId: object;
  houseId: {
    _id: string;
    name: string;
    price: number;
  };
  checkIn: Date;
  checkOut: Date;
  price: number;
  createdAt: Date;
}
