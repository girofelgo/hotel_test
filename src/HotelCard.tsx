import {
  Button,
  Card,
  CardContent,
  Paper,
  Rating,
  Typography,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import styled from "@emotion/styled";
import { Flex } from "./Hotels";

const StyledCarousel = styled(Carousel)`
  width: 300px;
  height: 200px;
`;

export const HotelCard = ({ hotel }: { hotel: any }) => {
  return (
    <Card>
      <CardContent>
        <Flex flexDirection="row" justifyContent="space-between">
          <Flex>
            <Flex>
              <StyledCarousel autoPlay={false}>
                {hotel.images?.map((image: any, i: any) => (
                  <img src={image.url} alt="" height="300" width="400" />
                ))}
              </StyledCarousel>
            </Flex>
            <Flex flexDirection="column">
              <Typography sx={{ fontSize: 16 }} color="text.primary">
                {hotel.name}
              </Typography>
              <Typography sx={{ fontSize: 12 }} color="text.secondary">
                {hotel.address1}
              </Typography>
              <Typography sx={{ fontSize: 12 }} color="text.secondary">
                {hotel.address2}
              </Typography>
            </Flex>
          </Flex>
          <Flex>
            <Rating name="read-only" readOnly value={hotel.starRating} />
          </Flex>
        </Flex>
      </CardContent>
    </Card>
  );
};
