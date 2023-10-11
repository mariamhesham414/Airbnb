export interface IReservation {
  _id: string;
  userId: {
    name: string;
  };
  houseId: {
    _id: string;
    name: string;
    price: number;
    images: [string];
  };
  checkIn: Date;
  checkOut: Date;
  price: number;
  createdAt: Date;
}
