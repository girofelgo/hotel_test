import React from "react";
import "./App.css";
import { Rating } from "@mui/material";
import styled from "@emotion/styled";

type IValue = number;

const Flex = styled.div<{ flexDirection?: string }>`
  display: flex;
  flex-direction: ${({ flexDirection = "row" }) => flexDirection};
`;

function App() {
  const [rating, setRating] = React.useState<number | null>(null);
  const [adultCount, setAdultCount] = React.useState<IValue>(0);
  const [childCount, setChildCount] = React.useState<IValue>(0);
  return (
    <div className="App">
      <header className="App-header">
        <div>top banner</div>
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />
        <Flex>
          <div>Adults</div>
          <div onClick={() => setAdultCount(adultCount + 1)}>+</div>
          <div>{adultCount}</div>
          <div onClick={() => adultCount > 0 && setAdultCount(adultCount - 1)}>
            -
          </div>
        </Flex>
        <Flex>
          <div>Children</div>
          <div onClick={() => setChildCount(childCount + 1)}>+</div>
          <div>{childCount}</div>
          <div onClick={() => childCount > 0 && setChildCount(childCount - 1)}>
            -
          </div>
        </Flex>
      </header>
    </div>
  );
}

export default App;
