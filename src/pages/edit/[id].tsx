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

import * as S from "components/_pages/add-edit";
import { GetServerSideProps } from "next";

const generateViaCepEndpoint = (cep: string) =>
  `https://viacep.com.br/ws/${cep}/json/`;

export type EditEnterpriseProps = {
  enterprise: Enterprise;
};

export default function EditEnterprise(props: EditEnterpriseProps) {
  const router = useRouter();

  const [name, setName] = useState(props.enterprise.name);
  const [cep, setCep] = useState(props.enterprise.address.cep);
  const [address, setAddress] = useState<Partial<ViaCepAddress> | null>({
    bairro: props.enterprise.address.district,
    localidade: props.enterprise.address.city,
    logradouro: props.enterprise.address.street,
    uf: props.enterprise.address.state,
  });
  const [number, setNumber] = useState(props.enterprise.address.number);
  const [status, setStatus] = useState<SelectOption | null>({
    id: props.enterprise.status,
  } as SelectOption);
  const [purpose, setPurpose] = useState<SelectOption | null>({
    id: props.enterprise.purpose,
  } as SelectOption);

  useEffect(() => {
    (async () => {
      const cleanedCep = cep.replace(/\D+/g, "");
      setCep(cleanedCep);
      if (cleanedCep.length !== 8) return;

      const { data: address } = await axios.get<ViaCepAddress>(
        generateViaCepEndpoint(cleanedCep)
      );

      if (!address.cep) return;
      setAddress(address);
    })();
  }, [cep]);

  async function editEnterprise() {
    if (name && purpose && status && address && number) {
      try {
        await api.put<Omit<Enterprise, "id">, Enterprise>(
          `/enterprises/${props.enterprise.id}`,
          {
            name,
            purpose: purpose.id as EnterprisePurpose,
            status: status.id as EnterpriseStatus,
            address: {
              cep,
              city: address.localidade!,
              district: address.bairro!,
              state: address.uf!,
              street: address.logradouro!,
              number,
            },
            ri_number: "2346",
          }
        );

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
              defaultSelectedOptionId={props.enterprise.status}
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
              defaultSelectedOptionId={props.enterprise.purpose}
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

        <Button style={{ justifySelf: "center" }} onClick={editEnterprise}>
          Editar
        </Button>
      </Main>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string };

  try {
    const { data: enterprise } = await api.get(`/enterprises/${id}`);

    return { props: { enterprise } };
  } catch {
    return { notFound: true };
  }
};
