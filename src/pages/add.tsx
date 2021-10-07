import { useState } from "react";

import { Button } from "components/Button";
import { Card } from "components/Card";
import { Container } from "components/Container";
import { Heading } from "components/Heading";
import { Main } from "components/Main";
import { Select, SelectOption } from "components/Select";
import { TextField } from "components/TextField";

import * as S from "components/_pages/add";

export default function Add() {
  const [name, setName] = useState("");
  const [cep, setCep] = useState("");
  const [number, setNumber] = useState("");
  const [status, setStatus] = useState<SelectOption | null>(null);
  const [purpose, setPurpose] = useState<SelectOption | null>(null);

  return (
    <Container>
      <Main style={{ justifyContent: "center" }}>
        <Card>
          <S.CardItemsWrapper>
            <Heading>Informações</Heading>

            <Select
              options={[
                { id: "breve_lancamento", label: "Breve Lançamento" },
                { id: "RELEASE", label: "Lançamento" },
                { id: "em_obras", label: "Em obras" },
                { id: "pronto", label: "Pronto pra morar" },
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
                { id: "HOME", label: "Residencial" },
                { id: "comercial", label: "Comercial" },
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

            <S.AddressHighlight>
              Rua Doutor Messuti, <br />
              Vila Bastos <br />
              Santo André <br />
              SP
            </S.AddressHighlight>

            <TextField
              placeholder="Número"
              value={number}
              onChange={(event) => setNumber(event.target.value)}
            />
          </S.CardItemsWrapper>
        </Card>

        <Button style={{ justifySelf: "center" }}>Cadastrar</Button>
      </Main>
    </Container>
  );
}
