import { Paper, Rating } from "@mui/material";
import { IValue } from "./interfaces";
import { ActionIcon, Controls, Flex, StyledText } from "./styled/components";

interface IFilterControls {
  setRating(rating: IValue): void;
  setAdultCount(count: IValue): void;
  setChildCount(count: IValue): void;
  rating: number;
  adultCount: number;
  childCount: number;
}

export const FilterControls = ({
  setRating,
  setAdultCount,
  setChildCount,
  rating,
  adultCount,
  childCount,
}: IFilterControls) => (
  <Paper elevation={8} sx={{ width: 1 / 2, margin: "0 auto" }}>
    <Controls>
      <Rating
        size="large"
        defaultValue={1}
        name="simple-controlled"
        value={rating}
        onChange={(event, value) => {
          setRating(value as number);
        }}
      />
      <Flex>
        <StyledText>Adults</StyledText>
        <ActionIcon onClick={() => setAdultCount(adultCount + 1)}>+</ActionIcon>
        <StyledText>{adultCount}</StyledText>
        <ActionIcon
          onClick={() => adultCount > 0 && setAdultCount(adultCount - 1)}
        >
          -
        </ActionIcon>
      </Flex>
      <Flex>
        <StyledText>Children</StyledText>
        <ActionIcon onClick={() => setChildCount(childCount + 1)}>+</ActionIcon>
        <StyledText>{childCount}</StyledText>
        <ActionIcon
          onClick={() => childCount > 0 && setChildCount(childCount - 1)}
        >
          -
        </ActionIcon>
      </Flex>
    </Controls>
  </Paper>
);
