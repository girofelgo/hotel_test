import React from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";
import { HotelCard } from "./HotelCard";
import axios from "axios";
import hotelPlaceholder from "./assets/hotel_placeholder.jpeg";
import { Hotel, HotelRoomCollection, IValue, Room } from "./interfaces";
import { HeaderBanner } from "./styled/components";
import { FilterControls } from "./FilterControls";

const hotelUrl =
  "https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG";
const getRoomsUrl = (id: string) =>
  `https://obmng.dbm.guestline.net/api/roomRates/OBMNG/${id}`;

export const Hotels = (props: any) => {
  const [rating, setRating] = React.useState<IValue>(1);
  const [adultCount, setAdultCount] = React.useState<IValue>(0);
  const [childCount, setChildCount] = React.useState<IValue>(0);
  const totalCount = React.useMemo(
    () => adultCount + childCount,
    [adultCount, childCount]
  );

  const [hotels, setHotels] = React.useState<Hotel[] | null>(null);
  const [roomCollection, setRoomCollection] = React.useState<
    HotelRoomCollection[] | null
  >(null);

  React.useEffect(() => {
    axios.get(hotelUrl).then((response) => {
      setHotels(response.data);
    });
  }, []);

  const derivedHotels = React.useMemo(() => {
    if (hotels) {
      const returnHotels = hotels.filter(
        (item: { starRating: string }) => parseInt(item.starRating) >= rating
      );
      const hotelIds = returnHotels.map((item: Hotel) => item.id);
      axios
        .all(hotelIds.map((id: string) => axios.get(getRoomsUrl(id))))
        .then((responses: any) => {
          setRoomCollection(
            responses.map((res: any, i: number) =>
              Object.assign({}, { hotelId: hotelIds[i], rooms: res.data.rooms })
            )
          );
        });
      return returnHotels;
    }
  }, [hotels, rating]);

  const hotelsDerivedFromRooms = React.useMemo(() => {
    if (roomCollection && derivedHotels && totalCount > 0) {
      return derivedHotels?.filter(
        (hotel: Hotel) =>
          roomCollection.length > 0 &&
          roomCollection.length === derivedHotels?.length &&
          roomCollection
            .find(
              (roomCollection: HotelRoomCollection) =>
                roomCollection.hotelId === hotel.id
            )!
            .rooms.filter(
              (room: Room) =>
                (room.occupancy.maxAdults >= adultCount &&
                  room.occupancy.maxChildren >= childCount &&
                  !room.occupancy.maxOverall) ||
                (room.occupancy.maxOverall! >= totalCount &&
                  room.occupancy.maxAdults >= adultCount &&
                  room.occupancy.maxChildren >= childCount)
            ).length > 0
      );
    } else {
      return derivedHotels;
    }
  }, [adultCount, childCount, roomCollection, derivedHotels, totalCount]);

  // console.log(hotels, derivedHotels, rooms, totalCount, hotelsDerivedFromRooms);

  const getHotelRooms = (rooms: HotelRoomCollection[], hotel: Hotel) =>
    rooms &&
    (rooms as HotelRoomCollection[]).find(
      (roomCollection: HotelRoomCollection) =>
        roomCollection.hotelId === hotel.id
    )!.rooms!;

  return (
    <div className="App">
      <HeaderBanner src={hotelPlaceholder} alt="hotel placeholder" />
      <Container maxWidth="lg">
        <FilterControls
          setRating={setRating}
          setAdultCount={setAdultCount}
          setChildCount={setChildCount}
          rating={rating}
          adultCount={adultCount}
          childCount={childCount}
        />
        <Grid direction="column" container spacing={2} rowSpacing={2}>
          {hotelsDerivedFromRooms?.length ? (
            hotelsDerivedFromRooms.map((hotel: Hotel) => (
              <Grid item xs={4}>
                <Paper elevation={5}>
                  <HotelCard
                    key={hotel.name}
                    hotel={hotel}
                    childCount={childCount}
                    adultCount={adultCount}
                    totalCount={totalCount}
                    rooms={
                      roomCollection && getHotelRooms(roomCollection, hotel)
                    }
                  />
                </Paper>
              </Grid>
            ))
          ) : (
            <Paper
              sx={{
                width: 1 / 2,
                textAlign: "center",
                margin: "0 auto",
                height: "100px",
              }}
            >
              {" "}
              <Typography sx={{ fontSize: 24, marginTop: "20px" }}>
                No hotels match the selected criteria.
              </Typography>
            </Paper>
          )}
        </Grid>
      </Container>
    </div>
  );
};
