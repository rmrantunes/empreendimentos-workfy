import Image from "next/image";

import { Button } from "components/Button";
import { Container } from "components/Container";
import { HeaderTitle } from "components/HeaderTitle";

import PlusIcon from "assets/icons/plus.svg";

import * as S from "./styles";

export function Header() {
  return (
    <S.Wrapper>
      <Container>
        <S.SpaceBetween>
          <HeaderTitle>Empreendimentos</HeaderTitle>

          <Button icon={<Image src={PlusIcon} alt="" />}>Adicionar</Button>
        </S.SpaceBetween>
      </Container>
    </S.Wrapper>
  );
}
