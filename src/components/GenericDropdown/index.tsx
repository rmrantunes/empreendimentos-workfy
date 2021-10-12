import { useEffect, useRef } from "react";
import * as S from "./styles";

export type GenericDropdownProps = {
  header: React.ReactNode;
  children: React.ReactNode;
  shouldShowContent: boolean;
  onClickOutside?: () => void;
};

export function GenericDropdown(props: GenericDropdownProps) {
  const { onClickOutside } = props;

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!onClickOutside) return;

    function clickOutside(event: MouseEvent) {
      if (
        !wrapperRef.current ||
        wrapperRef.current.contains(event.target as Node)
      )
        return;
      onClickOutside?.();
    }

    window.addEventListener("click", clickOutside);
    return () => window.removeEventListener("click", clickOutside);
  }, [onClickOutside]);

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
