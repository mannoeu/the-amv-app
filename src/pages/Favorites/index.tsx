import React from "react";

import { Container } from "../../components/Container";
import * as S from "./styles";

const Favorites: React.FC = () => {
  return (
    <Container bgColor="#101010">
      <S.Content>
        <S.Title>Favorites</S.Title>
      </S.Content>
    </Container>
  );
};

export default Favorites;
