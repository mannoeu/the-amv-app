import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Container } from "../../components/Container";
import Background1 from "../../assets/bg1.png";
import Logo from "../../assets/logo.png";

import * as S from "./styles";

const Home: React.FC = () => {
  const { navigate } = useNavigation();

  function navigateToFavorites() {
    navigate("Tabs");
  }

  return (
    <Container justifyContent="center" alignItems="center">
      <S.Content source={Background1}>
        <S.Image source={Logo} />
        <S.Title>Welcome!</S.Title>
        <S.SubTitle>
          Search for the best AMV's content from your favorite anime. Listen and
          enjoy.
        </S.SubTitle>

        <S.BoxAction>
          <S.Button onPress={navigateToFavorites}>
            <S.TextButton>Explore</S.TextButton>
          </S.Button>
        </S.BoxAction>
      </S.Content>
    </Container>
  );
};

export default Home;
