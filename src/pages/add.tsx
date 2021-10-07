import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { api } from "services/axios";
import {
  Enterprise,
  EnterprisePurpose,
  EnterpriseStatus,
  ViaCepAddress,
} from "types";

import { Button } from "components/Button";
import { Card } from "components/Card";
import { Container } from "components/Container";
import { Heading } from "components/Heading";
import { Main } from "components/Main";
import { Select, SelectOption } from "components/Select";
import { TextField } from "components/TextField";

import * as S from "components/_pages/add";

const generateViaCepEndpoint = (cep: string) =>
  `https://viacep.com.br/ws/${cep}/json/`;

export default function Add() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState<ViaCepAddress | null>(null);
  const [number, setNumber] = useState("");
  const [status, setStatus] = useState<SelectOption | null>(null);
  const [purpose, setPurpose] = useState<SelectOption | null>(null);

  useEffect(() => {
    (async () => {
      const cleanedCep = cep.replace(/\D+/d, "");
      setCep(cleanedCep);
      if (cleanedCep.length !== 8) return;

      const { data: address } = await axios.get<ViaCepAddress>(
        generateViaCepEndpoint(cleanedCep)
      );

      if (!address.cep) return;
      setAddress(address);
    })();
  }, [cep]);

  async function addEnterprise() {
    if (name && purpose && status && address && number) {
      try {
        await api.post<Omit<Enterprise, "id">, Enterprise>("/enterprises", {
          name,
          purpose: purpose.id as EnterprisePurpose,
          status: status.id as EnterpriseStatus,
          address: {
            cep,
            city: address.localidade,
            district: address.bairro,
            state: address.uf,
            street: address.logradouro,
            number,
          },
          ri_number: "2346",
        });

        router.push("/");
      } catch (e) {}
    }
  }

  return (
    <Container>
      <Main style={{ justifyContent: "center" }}>
        <Card>
          <S.CardItemsWrapper>
            <Heading>Informações</Heading>

            <Select
              options={[
                {
                  id: EnterpriseStatus.RELEASE_SOON,
                  label: "Breve Lançamento",
                },
                { id: EnterpriseStatus.RELEASE, label: "Lançamento" },
                { id: EnterpriseStatus.IN_CONSTRUCTION, label: "Em obras" },
                { id: EnterpriseStatus.READY, label: "Pronto pra morar" },
              ]}
              selectId="status"
              placeholder="Selecione situação"
              onSelect={setStatus}
            />

            <TextField
              placeholder="Nome do empreendimento"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />

            <Select
              options={[
                { id: EnterprisePurpose.HOME, label: "Residencial" },
                { id: EnterprisePurpose.BUSINESS, label: "Comercial" },
              ]}
              selectId="purpose"
              placeholder="Selecione"
              onSelect={setPurpose}
            />

            <TextField
              placeholder="CEP"
              value={cep}
              onChange={(event) => setCep(event.target.value)}
            />

            {address && (
              <S.AddressHighlight>
                {address.logradouro} <br />
                {address.bairro} <br />
                {address.localidade} <br />
                {address.uf}
              </S.AddressHighlight>
            )}

            <TextField
              placeholder="Número"
              value={number}
              onChange={(event) => setNumber(event.target.value)}
            />
          </S.CardItemsWrapper>
        </Card>

        <Button style={{ justifySelf: "center" }} onClick={addEnterprise}>
          Cadastrar
        </Button>
      </Main>
    </Container>
  );
}
