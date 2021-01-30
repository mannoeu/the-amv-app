import styled from "styled-components/native";
import { TouchableHighlightProps } from "react-native";

export const Content = styled.ImageBackground`
  flex: 1;
  padding: 50px 20px 100px;
`;

/* ------------------ */

export const Title = styled.Text`
  color: #fff;
  font-family: "Poppins_600SemiBold";
  font-size: 32px;
`;

export const SubTitle = styled.Text`
  color: #c6c6c6;
  font-family: "PTSerif_700Bold";
  font-size: 16px;
`;

/* ------------------ */
export const Image = styled.Image`
  width: 200px;
  height: 200px;
  margin: 0 auto;
`;

Image.defaultProps = {
  resizeMode: "contain",
};

/* ------------------ */

export const BoxAction = styled.View`
  margin-top: 30px;
  justify-content: center;
  align-items: center;
`;

/* ------------------ */

export const Button = styled.TouchableHighlight`
  width: 100%;
  border-radius: 4px;
  height: 56px;
  justify-content: center;
  align-items: center;
  background: #725bff;
`;

Button.defaultProps = {
  activeOpacity: 0.8,
  underlayColor: "#5F5BFF",
};

export const TextButton = styled.Text`
  font-family: "Poppins_600SemiBold";
  color: #fff;
  letter-spacing: 1.8px;
  font-size: 16px;
  text-transform: uppercase;
`;
