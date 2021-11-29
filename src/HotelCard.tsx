import { Card, CardContent, Rating, Typography } from "@mui/material";
import { Flex } from "./App";

export const HotelCard = ({ hotel }: { hotel: any }) => {
  return (
    <Card>
      <CardContent>
        <Flex flexDirection="row" justifyContent="space-between">
          <Flex>
            <Flex>
              <div>placeholder for image component</div>
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
            <Rating name="read-only" readOnly value={3} />
          </Flex>
        </Flex>
      </CardContent>
    </Card>
  );
};
