import React from "react";
import { Box, Container, Grid, Rating, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { HotelCard } from "./HotelCard";

type IValue = number;

const Flex = styled.div<{ flexDirection?: string }>`
  display: flex;
  flex-direction: ${({ flexDirection = "row" }) => flexDirection};
`;

const Controls = styled.div`
  flex-direction: row;
  display: flex;
  height: 50px;
`;

const hotels = [
  {
    id: "OBMNG1",
    name: "OBM Hotel 1",
    description:
      "Etag for the win chocolate biscuit wafer soufflé toffee toffee donut. Tart biscuit wafer pudding chocolate cake oat cake halvah\r\nMarshmallow halvah gingerbread apple pie muffin biscuit. Cake pudding topping pie lemon drops lollipop. Bear claw oat cake jelly beans. Bonbon toffee caramels pudding gingerbread cookie lollipop.",
    address1: "Address 1",
    address2: "Address 2",
    postcode: "WC1R 4PS",
    town: "London",
    country: "United Kingdom",
    countryCode: "GB",
    starRating: "4",
    facilities: [
      {
        code: "1",
      },
      {
        code: "2",
      },
      {
        code: "3",
      },
      {
        code: "4",
      },
      {
        code: "5",
      },
      {
        code: "6",
      },
      {
        code: "7",
      },
      {
        code: "8",
      },
      {
        code: "9",
      },
      {
        code: "10",
      },
      {
        code: "11",
      },
      {
        code: "12",
      },
      {
        code: "13",
      },
      {
        code: "14",
      },
      {
        code: "15",
      },
      {
        code: "16",
      },
      {
        code: "17",
      },
      {
        code: "18",
      },
      {
        code: "19",
      },
      {
        code: "20",
      },
      {
        code: "21",
      },
      {
        code: "22",
      },
      {
        code: "23",
      },
      {
        code: "24",
      },
      {
        code: "25",
      },
      {
        code: "26",
      },
      {
        code: "27",
      },
      {
        code: "28",
      },
      {
        code: "29",
      },
      {
        code: "30",
      },
      {
        code: "31",
      },
      {
        code: "32",
      },
      {
        code: "33",
      },
      {
        code: "34",
      },
      {
        code: "35",
      },
    ],
    telephone: "12345666",
    email: "JabbaScript@guestline.com",
    images: [
      {
        url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/Hotel1.JPG",
      },
      {
        url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/hotel4.jpg",
      },
      {
        url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/room5.jpg",
      },
    ],
    checkInHours: "14",
    checkInMinutes: "00",
    checkOutHours: "11",
    checkOutMinutes: "00",
    position: {
      latitude: "51.507351000",
      longitude: "-0.127758000",
      timezone: "GMT",
    },
  },
  {
    id: "OBMNG2",
    name: "OBM Hotel 2",
    description:
      "Fruitcake brownie sugar plum cotton candy pastry marzipan pie lollipop ice cream. Sweet pie tootsie roll oat cake apple pie candy pastry wafer jelly beans. Cake sweet oat cake chocolate sweet chocolate pudding biscuit.",
    address1: "10 Palace Place",
    address2: "",
    postcode: "SW1E 5BW",
    town: "London",
    country: "United Kingdom",
    countryCode: "GB",
    starRating: "5",
    facilities: [],
    telephone: "54453559",
    email: "JabbaScript@guestline.com",
    images: [
      {
        url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG2/hotel1.jpg",
        alt: "Hotel image",
      },
    ],
    checkInHours: "13",
    checkInMinutes: "00",
    checkOutHours: "10",
    checkOutMinutes: "00",
    position: {
      latitude: "1.100000000",
      longitude: "-1.100000000",
      timezone: "GMT",
    },
  },
  {
    id: "OBMNG3",
    name: "OBM Hotel 3",
    description:
      "Chocolate marzipan muffin danish cake chupa chups pastry. Croissant sweet sweet wafer sweet roll chocolate. Carrot cake pudding tart pastry lemon drops croissant cupcake brownie croissant. Sweet lollipop soufflé tart cookie sweet gingerbread pudding croissant.",
    address1: "10 Carlisle Street",
    address2: "",
    postcode: "W1D 3BR",
    town: "London",
    country: "United Kingdom",
    countryCode: "GB",
    starRating: "3",
    facilities: [],
    telephone: "1235345",
    email: "jabbaservices@guestline.com",
    images: [
      {
        url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG3/hotel2.jpg",
        alt: "hotel",
      },
    ],
    checkInHours: "12",
    checkInMinutes: "00",
    checkOutHours: "9",
    checkOutMinutes: "00",
    position: {
      latitude: "1.200000000",
      longitude: "-1.200000000",
      timezone: "GMT",
    },
  },
  {
    id: "OBMNG4",
    name: "OBM Hotel 4",
    description:
      "Carrot cake pudding tart pastry lemon drops croissant cupcake brownie croissant. Sweet lollipop soufflé tart cookie sweet gingerbread pudding croissant.\r\nSesame snaps tootsie roll tootsie roll chocolate cake halvah cake dessert. Sesame snaps wafer sweet ice cream cotton candy sugar plum sweet roll. Bonbon candy canes chocolate bar pie halvah caramels jelly-o. Powder chocolate cake carrot cake chupa chups apple pie.",
    address1: "27 Chapter Way",
    address2: "",
    postcode: "SW19 2RF",
    town: "Liverpool",
    country: "United Kingdom",
    countryCode: "GB",
    starRating: "5",
    facilities: [],
    telephone: "123456",
    email: "jabbaservices@guestline.com",
    images: [
      {
        url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG4/hotel3.jpg",
        alt: "hotel",
      },
    ],
    checkInHours: "15",
    checkInMinutes: "00",
    checkOutHours: "12",
    checkOutMinutes: "00",
  },
];

const ratePlans = [
  {
    id: "24_HOUR",
    shortDescription: "24 Hour Rate - Payment Type Pay Now",
    longDescription:
      "Code: 24_HOUR, Prepayment: Pay now\r\n\r\nTesting bullet points\r\n1\r\n2\r\n3",
    prePayment: "Reserve",
    cancellationPolicy: {
      name: "Free Cancelation",
      text: "You can cancel when ever you like.",
      penalty: "Fixed",
      applicable: "Full Stay",
      amount: 0,
      hour: "10 AM",
    },
  },
  {
    id: "BAR_BB10",
    shortDescription: "-10% off",
    prePayment: "First night",
  },
  {
    id: "BB_SAVER",
    shortDescription: "Bed and Breakfast",
    longDescription: "BB_SAVER - Pre Payment Type",
    prePayment: "Deposit",
    cancellationPolicy: {
      name: "Strict",
      text: "There will be no refund. Do not pass go. Do not collect £200.",
      penalty: "Fixed",
      applicable: "Full Stay",
      amount: 100,
      days: 300,
    },
    prePaymentValue: 25,
    prePaymentIsPercentage: true,
  },
  {
    id: "BAR_RO",
    shortDescription: "Room Only - Payment Type Per Adult",
    longDescription: "Code: BAR_RO, Prepayment: Per Adult 25.00",
    prePayment: "Reserve",
    cancellationPolicy: {
      name: "Free Cancelation",
      text: "You can cancel when ever you like.",
      penalty: "Fixed",
      applicable: "Full Stay",
      amount: 0,
      hour: "10 AM",
    },
  },
  {
    id: "BAR_BB",
    shortDescription: "Bed and Breakfast - Payment Type Guarantee",
    longDescription: "Code: BAR_BB, Prepayment: Guarantee",
    prePayment: "Reserve",
    cancellationPolicy: {
      name: "Free Cancelation",
      text: "You can cancel when ever you like.",
      penalty: "Fixed",
      applicable: "Full Stay",
      amount: 0,
      hour: "10 AM",
    },
  },
  {
    id: "BAR_DBB",
    shortDescription: "Dinner, Bed & Breakfast - Payment Type Deposit",
    longDescription: "BAR_DBB. Payment Type: Deposit 50%",
    prePayment: "Reserve",
    cancellationPolicy: {
      name: "Strict",
      text: "There will be no refund. Do not pass go. Do not collect £200.",
      penalty: "Fixed",
      applicable: "Full Stay",
      amount: 100,
      days: 300,
    },
  },
  {
    id: "CORP001",
    shortDescription: "Corporate Rate 1",
    prePayment: "First night",
    cancellationPolicy: {
      name: "Strict",
      text: "There will be no refund. Do not pass go. Do not collect £200.",
      penalty: "Fixed",
      applicable: "Full Stay",
      amount: 100,
      days: 300,
    },
  },
];

function App() {
  const [rating, setRating] = React.useState<number | null>(null);
  const [adultCount, setAdultCount] = React.useState<IValue>(0);
  const [childCount, setChildCount] = React.useState<IValue>(0);

  return (
    <div className="App">
      <Container maxWidth="lg">
        <Controls>
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
          />
          <Flex>
            <Typography>Adults</Typography>
            <Typography onClick={() => setAdultCount(adultCount + 1)}>
              +
            </Typography>
            <Typography>{adultCount}</Typography>
            <Typography
              onClick={() => adultCount > 0 && setAdultCount(adultCount - 1)}
            >
              -
            </Typography>
          </Flex>
          <Flex>
            <Typography>Children</Typography>
            <Typography onClick={() => setChildCount(childCount + 1)}>
              +
            </Typography>
            <Typography>{childCount}</Typography>
            <Typography
              onClick={() => childCount > 0 && setChildCount(childCount - 1)}
            >
              -
            </Typography>
          </Flex>
        </Controls>
        <Grid direction="column" container spacing={4}>
          {hotels.map((hotel) => (
            <HotelCard key={hotel.name} hotel={hotel} />
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
