import Image from "next/image";
import { useRouter } from "next/router";
import { Enterprise, EnterprisePurpose, EnterpriseStatus } from "types";

import { IconButton } from "components/IconButton";
import { Badge } from "components/Badge";

import PencilIcon from "assets/icons/pencil.svg";
import TrashIcon from "assets/icons/trash.svg";

import * as S from "./styles";
import { api } from "services/axios";
import { useCallback } from "react";

export type EnterpriseCardProps = {
  enterprise: Enterprise;
};

function formatAddress(address: Enterprise["address"]) {
  return `${address.street}, ${address.number} - ${address.district}, ${address.city}`;
}

function getStatusText(status: Enterprise["status"]) {
  switch (status) {
    case EnterpriseStatus.RELEASE:
      return "Lançamento";
    case EnterpriseStatus.RELEASE_SOON:
      return "Breve lançamento";
    case EnterpriseStatus.IN_CONSTRUCTION:
      return "Em obras";
    case EnterpriseStatus.READY:
      return "Pronto pra morar";
  }
}

function getPurposeText(status: Enterprise["purpose"]) {
  switch (status) {
    case EnterprisePurpose.HOME:
      return "Residencial";
    case EnterprisePurpose.BUSINESS:
      return "Comercial";
  }
}

export function EnterpriseCard(props: EnterpriseCardProps) {
  const router = useRouter();

  const deleteEnterprise = useCallback(async () => {
    try {
      await api.delete(`/enterprises/${props.enterprise.id}`);

      router.reload();
    } catch {}
  }, [router, props.enterprise.id]);

  return (
    <S.Wrapper>
      <div>
        <S.TitleAndIcons>
          <S.Title>{props.enterprise.name}</S.Title>
          <IconButton
            onClick={() => router.push(`/edit/${props.enterprise.id}`)}
          >
            <Image src={PencilIcon} alt="" />
          </IconButton>
          <IconButton onClick={deleteEnterprise}>
            <Image src={TrashIcon} alt="" />
          </IconButton>
        </S.TitleAndIcons>
        <S.Address>{formatAddress(props.enterprise.address)}</S.Address>
      </div>
      <S.Badges>
        <Badge>{getStatusText(props.enterprise.status)}</Badge>
        <Badge>{getPurposeText(props.enterprise.purpose)}</Badge>
      </S.Badges>
    </S.Wrapper>
  );
}
