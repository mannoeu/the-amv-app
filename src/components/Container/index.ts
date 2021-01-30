import styled from "styled-components/native";

import { ViewProps, Platform, StatusBar } from "react-native";

/* --- View Props --- */
interface BoxProps extends ViewProps {
  mtPlataform?: number;
  bgColor?: string;
  justifyContent?: string;
  alignItems?: string;
}

export const Container = styled.View<BoxProps>`
  flex: 1;
  background-color: ${(props) => props.bgColor};
  padding-top: ${(props) => `${props.mtPlataform}px`};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
`;

/* --- Default Props --- */
Container.defaultProps = {
  mtPlataform: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  bgColor: "#ededed",
  justifyContent: "flex-start",
  alignItems: "flex-start",
};
