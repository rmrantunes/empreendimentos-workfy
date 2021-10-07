import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import * as S from "./styles";

export type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: React.ReactElement;
};

export function TextField(props: TextFieldProps) {
  const { icon, ...inputProps } = props;

  return (
    <S.Wrapper>
      {icon && icon}
      <S.Input {...inputProps} />
    </S.Wrapper>
  );
}
