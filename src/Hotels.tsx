import React from "react";
import { Box, Container, Grid, Rating, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { HotelCard } from "./HotelCard";
import axios from "axios";

type IValue = number;

interface IFlexProps {
  flexDirection?: string;
  justifyContent?: string;
  alignSelf?: string;
}

export const Flex = styled.div<IFlexProps>`
  display: flex;
  flex-direction: ${({ flexDirection = "row" }) => flexDirection};
  justify-content: ${({ justifyContent = "start" }) => justifyContent};
  align-self: ${({ alignSelf = "start" }) => alignSelf};
`;

const Controls = styled.div`
  flex-direction: row;
  display: flex;
  margin: 0 auto 20px;
  justify-content: space-between;
  border: 1px solid gray;
  width: 500px;
`;

const StyledText = styled(Typography)`
  margin-right: 5px;
`;

const ActionIcon = styled.div`
  cursor: pointer;
  showMore(switch): void;
  margin-right: 5px;
`;

const hotelUrl =
  "https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG";
const getRoomsUrl = (id: string) =>
  `https://obmng.dbm.guestline.net/api/roomRates/OBMNG/${id}`;

export const Hotels = (props: any) => {
  const [rating, setRating] = React.useState<number>(1);
  const [adultCount, setAdultCount] = React.useState<IValue>(0);
  const [childCount, setChildCount] = React.useState<IValue>(0);
  const totalCount = React.useMemo(
    () => adultCount + childCount,
    [adultCount, childCount]
  );

  const [hotels, setHotels] = React.useState<any>(null);
  const [rooms, setRooms] = React.useState<any>(null);

  const derivedHotels = React.useMemo(() => {
    return (
      hotels &&
      hotels.filter(
        (item: { starRating: string }) => parseInt(item.starRating) >= rating
      )
    );
  }, [hotels, rating]);

  React.useEffect(() => {
    axios.get(hotelUrl).then((response) => {
      setHotels(response.data);
    });
  }, []);

  React.useEffect(() => {
    if (derivedHotels) {
      const hotelIds = derivedHotels.map((item: any) => item.id);
      axios
        .all(hotelIds.map((id: string) => axios.get(getRoomsUrl(id))))
        .then((responses: any) => {
          setRooms(
            responses.map((res: any, i: number) =>
              Object.assign({}, { hotelId: hotelIds[i], rooms: res.data.rooms })
            )
          );
        });
    }
  }, [derivedHotels]);

  const hotelsDerivedFromRooms = React.useMemo(() => {
    if (rooms && derivedHotels) {
      const occupancies = (hotel: any) =>
        rooms
          .find((room: any) => room.hotelId === hotel.id)
          .rooms.filter(
            (room: any) =>
              room.occupancy.maxOverall >= totalCount &&
              room.occupancy.maxChildren >= childCount &&
              room.occupancy.maxAdults >= adultCount
          ).length > 0;
      return derivedHotels?.filter((hotel: any) => occupancies(hotel));
    }
  }, [adultCount, childCount, rooms, derivedHotels, totalCount]);

  console.log(hotels, derivedHotels, rooms, adultCount, hotelsDerivedFromRooms);

  return (
    <div className="App">
      <Container maxWidth="lg">
        <Controls>
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(event, value) => {
              setRating(value as number);
            }}
          />
          <Flex>
            <StyledText>Adults</StyledText>
            <ActionIcon onClick={() => setAdultCount(adultCount + 1)}>
              +
            </ActionIcon>
            <StyledText>{adultCount}</StyledText>
            <ActionIcon
              onClick={() => adultCount > 0 && setAdultCount(adultCount - 1)}
            >
              -
            </ActionIcon>
          </Flex>
          <Flex>
            <StyledText>Children</StyledText>
            <ActionIcon onClick={() => setChildCount(childCount + 1)}>
              +
            </ActionIcon>
            <StyledText>{childCount}</StyledText>
            <ActionIcon
              onClick={() => childCount > 0 && setChildCount(childCount - 1)}
            >
              -
            </ActionIcon>
          </Flex>
        </Controls>
        <Grid direction="column" container spacing={4} rowSpacing={2}>
          {derivedHotels &&
            hotelsDerivedFromRooms.map((hotel: any) => (
              <HotelCard key={hotel.name} hotel={hotel} />
            ))}
        </Grid>
      </Container>
    </div>
  );
};