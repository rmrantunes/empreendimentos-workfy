import * as S from "./styles";

export type GenericDropdownProps = {
  header: React.ReactNode;
  children: React.ReactNode;
  shouldShowContent: boolean;
};

export function GenericDropdown(props: GenericDropdownProps) {
  return (
    <S.Wrapper>
      {props.header}
      <S.Content isOpen={props.shouldShowContent} className="custom-scroll">
        {props.children}
      </S.Content>
    </S.Wrapper>
  );
}

export { Button as GenericDropdownButton } from "./styles";
