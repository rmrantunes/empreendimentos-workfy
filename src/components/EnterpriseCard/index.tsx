import Image from "next/image";

import { IconButton } from "components/IconButton";
import { Badge } from "components/Badge";

import PencilIcon from "assets/icons/pencil.svg";
import TrashIcon from "assets/icons/trash.svg";
import { Enterprise } from "types";

import * as S from "./styles";

export type EnterpriseCardProps = {
  enterprise: Enterprise;
};

function formatAddress(address: Enterprise["address"]) {
  return `${address.street}, ${address.number} - ${address.district}, ${address.city}`;
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
        <Badge>Lançamento</Badge>
        <Badge>Residencial</Badge>
      </S.Badges>
    </S.Wrapper>
  );
}
