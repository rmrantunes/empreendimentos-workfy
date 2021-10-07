import { useCallback, useMemo } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import { Button } from "components/Button";
import { Container } from "components/Container";
import { HeaderTitle } from "components/HeaderTitle";

import PlusIcon from "assets/icons/plus.svg";

import * as S from "./styles";

export function Header() {
  const { asPath, push } = useRouter();

  const headerTitle = useMemo(() => {
    switch (asPath) {
      case "/":
      default:
        return "Empreendimentos";
      case "/add":
        return "Cadastro de empreendimentos";
      case "/edit":
        return "Editar empreendimento";
    }
  }, [asPath]);

  return (
    <S.Wrapper>
      <Container>
        <S.SpaceBetween>
          <HeaderTitle>{headerTitle}</HeaderTitle>

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
