import { useCallback } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import { Button } from "components/Button";
import { Container } from "components/Container";
import { HeaderTitle } from "components/HeaderTitle";

import PlusIcon from "assets/icons/plus.svg";

import * as S from "./styles";

export function Header() {
  const { asPath, push } = useRouter();

  return (
    <S.Wrapper>
      <Container>
        <S.SpaceBetween>
          <HeaderTitle>Empreendimentos</HeaderTitle>

          {asPath === "/" && (
            <Button
              icon={<Image src={PlusIcon} alt="" />}
              onClick={() => {
                push("/add");
              }}
            >
              Adicionar
            </Button>
          )}
        </S.SpaceBetween>
      </Container>
    </S.Wrapper>
  );
}
