import * as S from "./styles";

export type ButtonProps = {
  children: React.ReactNode;
  icon?: React.ReactElement;
};

export function Button(props: ButtonProps) {
  return (
    <S.Wrapper>
      <S.Flex>
        <span>{props.children}</span>
        {props.icon && props.icon}
      </S.Flex>
    </S.Wrapper>
  );
}
