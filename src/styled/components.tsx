import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { IFlexProps } from "../interfaces";

export const Flex = styled.div<IFlexProps>`
  display: flex;
  flex-direction: ${({ flexDirection = "row" }) => flexDirection};
  justify-content: ${({ justifyContent = "start" }) => justifyContent};
  align-self: ${({ alignSelf = "start" }) => alignSelf};
  margin: ${({ margin = "0" }) => margin};
  border: ${({ border = "none" }) => border};
`;

export const Controls = styled.div`
  flex-direction: row;
  display: flex;
  margin: 0 auto 20px;
  justify-content: space-between;
  width: 500px;
`;

export const StyledText = styled(Typography)`
  margin-right: 5px;
  font-size: 20px;
`;

export const ActionIcon = styled.div`
  cursor: pointer;
  margin-right: 5px;
  line-height: 26px;
`;

export const HeaderBanner = styled.img`
  height: 300px;
  width: 100%;
  margin-bottom: 20px;
`;

export const StyledCarousel = styled(Carousel)`
  width: 300px;
  height: 200px;
`;

export const StyledRoomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 0 0 15px 0;
  padding: 10px 0;
  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  }
`;