import { useEffect, useState } from "react";
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

const PAGE_LIMIT = 10;

const Home: NextPage<HomeProps> = (props) => {
  const [enterprises, setEnterprises] = useState(props.enterprises);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      if (!searchText) {
        setEnterprises(props.enterprises);
        return;
      }

      const { data: searchResult } = await api.get(
        `/enterprises/?q=${searchText}`
      );

      setEnterprises(searchResult);
    })();
  }, [props.enterprises, searchText]);

  async function loadMore() {
    const updatedPage = page + 1;

    const endpoint = searchText
      ? `/enterprises/?q=${searchText}&_page=${updatedPage}&_limit=${PAGE_LIMIT}`
      : `/enterprises/?_page=${updatedPage}&_limit=${PAGE_LIMIT}`;

    const { data: searchResult } = await api.get(endpoint);

    setEnterprises((enterprises) => [...enterprises, ...searchResult]);
    setPage(updatedPage);
  }

  return (
    <Container>
      <S.Main>
        <TextField
          icon={<Image src={SearchIcon} alt="" />}
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          placeholder="Buscar"
        />
        <S.EnterpiseList>
          {enterprises.map((enterprise) => (
            <EnterpriseCard enterprise={enterprise} key={enterprise.id} />
          ))}
        </S.EnterpiseList>
        <Button style={{ justifySelf: "center" }} onClick={loadMore}>
          Carregar mais
        </Button>
      </S.Main>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: enterprises } = await api.get<Enterprise[]>(
    `/enterprises?_page=1&_limit=${PAGE_LIMIT}`
  );

  return { props: { enterprises } };
};

export default Home;
