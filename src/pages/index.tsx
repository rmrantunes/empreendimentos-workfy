import type { NextPage } from "next";
import Image from "next/image";

import { Container } from "components/Container";
import { EnterpriseCard } from "components/EnterpriseCard";
import { TextField } from "components/TextField";
import { Button } from "components/Button";

import SearchIcon from "assets/icons/search.svg";

import * as S from "components/_pages/index";

const Home: NextPage = () => {
  return (
    <Container>
      <S.Main>
        <TextField
          icon={<Image src={SearchIcon} alt="" />}
          placeholder="Buscar"
        />
        <S.EnterpiseList>
          <EnterpriseCard />
          <EnterpriseCard />
        </S.EnterpiseList>
        <Button style={{ justifySelf: "center" }}>Carregar mais</Button>
      </S.Main>
    </Container>
  );
};

export default Home;
