import { ButtonHTMLAttributes } from "react";
import * as S from "./styles";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  icon?: React.ReactElement;
};

export function Button(props: ButtonProps) {
  const { icon, children, ...buttonProps } = props;

  return (
    <S.Wrapper {...buttonProps}>
      <S.Flex>
        <span>{children}</span>
        {icon && icon}
      </S.Flex>
    </S.Wrapper>
  );
}
