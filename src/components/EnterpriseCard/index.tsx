import Image from "next/image";

import { IconButton } from "components/IconButton";
import { Badge } from "components/Badge";

import PencilIcon from "assets/icons/pencil.svg";
import TrashIcon from "assets/icons/trash.svg";

import * as S from "./styles";

export function EnterpriseCard() {
  return (
    <S.Wrapper>
      <div>
        <S.TitleAndIcons>
          <S.Title>Vilega Vila Velha</S.Title>
          <IconButton>
            <Image src={PencilIcon} alt="" />
          </IconButton>
          <IconButton>
            <Image src={TrashIcon} alt="" />
          </IconButton>
        </S.TitleAndIcons>
        <S.Address>
          Rua Dório Silva, 100 - Vila Guaranhuns, Vila Velha
        </S.Address>
      </div>
      <S.Badges>
        <Badge>Lançamento</Badge>
        <Badge>Residencial</Badge>
      </S.Badges>
    </S.Wrapper>
  );
}
