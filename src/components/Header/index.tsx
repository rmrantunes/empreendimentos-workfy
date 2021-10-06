import { Container } from "components/Container";
import { HeaderTitle } from "components/HeaderTitle";
import * as S from "./styles";

export function Header() {
  return (
    <S.Wrapper>
      <Container>
        <S.SpaceBetween>
          <HeaderTitle>Empreendimentos</HeaderTitle>
        </S.SpaceBetween>
      </Container>
    </S.Wrapper>
  );
}
