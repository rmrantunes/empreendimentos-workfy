import { useCallback, useState, useRef, useEffect } from "react";
import Image from "next/image";
import ChevronDownIcon from "assets/icons/chevron-down.svg";

import * as S from "./styles";

export type SelectOption = {
  id: string;
  label: string;
};

export type SelectProps = {
  options: SelectOption[];
  selectId: string;
  onSelect?: (selectedOption: SelectOption) => void;
  defaultSelectedOptionId?: string;
};

export function Select(props: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<
    SelectOption | undefined
  >(
    props.defaultSelectedOptionId
      ? props.options.find(({ id }) => props.defaultSelectedOptionId === id)
      : undefined
  );

  const selectedRef = useRef<HTMLDivElement>(null);

  const handleSelect = useCallback((selectedOption: SelectOption) => {
    return () => {
      setSelectedOption(selectedOption);
      setIsOpen((isOpen) => !isOpen);
    };
  }, []);

  useEffect(() => {
    function clickOutside(event: MouseEvent) {
      if (
        !selectedRef.current ||
        selectedRef.current.contains(event.target as Node)
      )
        return;
      else setIsOpen(false);
    }

    window.addEventListener("click", clickOutside);
    return () => window.removeEventListener("click", clickOutside);
  }, []);

  return (
    <S.Wrapper>
      <S.Selected
        onClick={() => setIsOpen(!isOpen)}
        aria-label={`Click to show/hide options for ${props.selectId}`}
        ref={selectedRef}
      >
        <span>{selectedOption?.label || "Selecione"}</span>
        <Image src={ChevronDownIcon} alt="" />
      </S.Selected>
      <S.OptionsContainer isOpen={isOpen}>
        {props.options.map((option) => (
          <S.Label key={option.id} selected={option.id === selectedOption?.id}>
            <S.HiddenRadio
              id={option.id}
              name={props.selectId}
              checked={option.id === selectedOption?.id}
              onChange={handleSelect(option)}
            />
            {option.label}
          </S.Label>
        ))}
      </S.OptionsContainer>
    </S.Wrapper>
  );
}
