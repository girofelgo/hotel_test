import React from "react";
import { Card, CardContent, Rating, Typography } from "@mui/material";
import { Flex, StyledCarousel, StyledRoomWrapper } from "./styled/components";
import { IHotelCardProps } from "./interfaces";

export const HotelCard = ({
  hotel,
  rooms,
  childCount,
  adultCount,
  totalCount,
}: IHotelCardProps) => {
  const derivedRooms = React.useMemo(() => {
    return (
      rooms &&
      rooms.filter(
        (room: any) =>
          (room.occupancy.maxAdults >= adultCount &&
            room.occupancy.maxChildren >= childCount &&
            !room.occupancy.maxOverall) ||
          (room.occupancy.maxOverall >= totalCount &&
            room.occupancy.maxAdults >= adultCount &&
            room.occupancy.maxChildren >= childCount)
      )
    );
  }, [adultCount, childCount, rooms, totalCount]);

  return (
    <Card>
      <CardContent>
        <Flex
          margin="0 0 20px 0"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Flex>
            <Flex margin="0 20px 0 0">
              <StyledCarousel autoPlay={false}>
                {hotel.images?.map((image: any, i: any) => (
                  <img
                    src={image.url}
                    key={i}
                    alt=""
                    height="300"
                    width="400"
                  />
                ))}
              </StyledCarousel>
            </Flex>
            <Flex flexDirection="column">
              <Typography sx={{ fontSize: 20 }} color="text.primary">
                {hotel.name}
              </Typography>
              <Typography sx={{ fontSize: 16 }} color="text.secondary">
                {hotel.address1}
              </Typography>
              <Typography sx={{ fontSize: 16 }} color="text.secondary">
                {hotel.address2}
              </Typography>
            </Flex>
          </Flex>
          <Flex>
            <Rating
              name="read-only"
              readOnly
              value={parseInt(hotel.starRating)}
            />
          </Flex>
        </Flex>
        {derivedRooms &&
          derivedRooms.map((room: any) => (
            <StyledRoomWrapper>
              <Flex margin="0 50px 0 0" flexDirection="column">
                <Typography sx={{ fontSize: 20 }} color="text.primary">
                  {room.name}
                </Typography>
                <Typography sx={{ fontSize: 16 }} color="text.secondary">
                  Adults: {room.occupancy.maxAdults}
                </Typography>
                <Typography sx={{ fontSize: 16 }} color="text.secondary">
                  Children: {room.occupancy.maxChildren}
                </Typography>
              </Flex>
              <Flex style={{ width: "50%" }} flexDirection="column">
                <Typography sx={{ fontSize: 16 }} color="text.secondary">
                  {room.longDescription}
                </Typography>
              </Flex>
            </StyledRoomWrapper>
          ))}
      </CardContent>
    </Card>
  );
};
