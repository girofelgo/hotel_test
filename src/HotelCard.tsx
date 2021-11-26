import { Card, CardContent, Rating, Typography } from "@mui/material";

export const HotelCard = ({ hotel }: { hotel: any }) => {
  return (
    <Card>
      <CardContent>
        <Typography sx={{ fontSize: 16 }} color="text.primary">
          {hotel.name}
        </Typography>
        <Typography sx={{ fontSize: 12 }} color="text.secondary">
          {hotel.address1}
        </Typography>
        <Typography sx={{ fontSize: 12 }} color="text.secondary">
          {hotel.address2}
        </Typography>
        <Rating name="read-only" readOnly value={3} />
      </CardContent>
    </Card>
  );
};
