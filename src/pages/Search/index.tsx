import React from "react";

import { Container } from "../../components/Container";
import * as S from "./styles";

const Search: React.FC = () => {
  return (
    <Container bgColor="#101010">
      <S.Content>
        <S.Title>Search</S.Title>
      </S.Content>
    </Container>
  );
};

export default Search;
