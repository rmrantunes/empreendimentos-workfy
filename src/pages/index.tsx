import type { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import { api } from "services/axios";
import { Enterprise } from "types";

import { Container } from "components/Container";
import { EnterpriseCard } from "components/EnterpriseCard";
import { TextField } from "components/TextField";
import { Button } from "components/Button";

import SearchIcon from "assets/icons/search.svg";

import * as S from "components/_pages/index";

export type HomeProps = {
  enterprises: Enterprise[];
};

const Home: NextPage<HomeProps> = (props) => {
  return (
    <Container>
      <S.Main>
        <TextField
          icon={<Image src={SearchIcon} alt="" />}
          placeholder="Buscar"
        />
        <S.EnterpiseList>
          {props.enterprises.map((enterprise) => (
            <EnterpriseCard enterprise={enterprise} key={enterprise._id} />
          ))}
        </S.EnterpiseList>
        <Button style={{ justifySelf: "center" }}>Carregar mais</Button>
      </S.Main>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: enterprises } = await api.get<Enterprise[]>("/enterprises");

  return { props: { enterprises } };
};

export default Home;
