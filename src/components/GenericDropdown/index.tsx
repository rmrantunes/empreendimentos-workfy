import { useRef } from "react";
import useClickOutside from "hooks/useClickOutside";

import * as S from "./styles";

export type GenericDropdownProps = {
  header: React.ReactNode;
  children: React.ReactNode;
  shouldShowContent: boolean;
  onClickOutside: () => void;
};

export function GenericDropdown(props: GenericDropdownProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useClickOutside(wrapperRef, props.onClickOutside);

  return (
    <S.Wrapper ref={wrapperRef}>
      {props.header}
      <S.Content isOpen={props.shouldShowContent} className="custom-scroll">
        {props.children}
      </S.Content>
    </S.Wrapper>
  );
}

export { Button as GenericDropdownButton } from "./styles";
