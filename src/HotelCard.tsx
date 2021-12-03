import { Card, CardContent, Rating, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import styled from "@emotion/styled";
import { Flex } from "./Hotels";

const StyledCarousel = styled(Carousel)`
  width: 300px;
  height: 200px;
`;

const StyledRoomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 0 0 15px 0;
  padding: 10px 0;
  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  }
`;

export const HotelCard = ({ hotel, rooms }: { hotel: any; rooms: any }) => {
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
            <Rating name="read-only" readOnly value={hotel.starRating} />
          </Flex>
        </Flex>
        {rooms &&
          rooms.map((room: any) => (
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
