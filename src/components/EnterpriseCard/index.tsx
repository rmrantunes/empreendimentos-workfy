import Image from "next/image";
import { Enterprise, EnterprisePurpose, EnterpriseStatus } from "types";

import { IconButton } from "components/IconButton";
import { Badge } from "components/Badge";

import PencilIcon from "assets/icons/pencil.svg";
import TrashIcon from "assets/icons/trash.svg";

import * as S from "./styles";

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
  return (
    <S.Wrapper>
      <div>
        <S.TitleAndIcons>
          <S.Title>{props.enterprise.name}</S.Title>
          <IconButton>
            <Image src={PencilIcon} alt="" />
          </IconButton>
          <IconButton>
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
