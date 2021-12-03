export type IValue = number;

export interface IFlexProps {
  flexDirection?: string;
  justifyContent?: string;
  alignSelf?: string;
  margin?: string;
  border?: string;
}

export type hotelImage = {
  url: string;
  alt: string;
};

export type roomOccupancy = {
  maxAdults: number;
  maxChildren: number;
  maxOverall?: number;
};

export type Hotel = {
  address1: string;
  address2: string;
  description: string;
  id: string;
  images: hotelImage[];
  name: string;
  starRating: string;
};

export type Room = {
  id: string;
  longDescription: string;
  name: string;
  occupancy: roomOccupancy;
  hotelId: string;
};

export type HotelRoomCollection = {
  hotelId: string,
  rooms: Room[],
}

export interface IHotelCardProps {
    childCount: number;
    adultCount: number;
    totalCount: number;
    hotel: Hotel;
    rooms: Room[] | null;
  }