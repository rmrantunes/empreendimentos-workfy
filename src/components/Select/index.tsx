import { useCallback, useState } from "react";
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

  const handleSelect = useCallback((selectedOption: SelectOption) => {
    return () => {
      setSelectedOption(selectedOption);
      setIsOpen((isOpen) => !isOpen);
    };
  }, []);

  return (
    <S.Wrapper>
      <S.Selected
        onClick={() => setIsOpen(!isOpen)}
        aria-label={`Click to show/hide options for ${props.selectId}`}
      >
        <span>{selectedOption?.label || "Selecione"}</span>
        <Image src={ChevronDownIcon} alt="" />
      </S.Selected>
      <S.OptionsContainer isOpen={isOpen}>
        {props.options.map((option) => (
          <S.Option
            key={option.id}
            onClick={handleSelect(option)}
            selected={option.id === selectedOption?.id}
            aria-label={
              option.id === selectedOption?.id
                ? `${option.id} is selected for ${props.selectId}`
                : `Click to select ${option.id} for ${props.selectId}`
            }
          >
            <S.HiddenRadio id={option.id} name={props.selectId} />
            <S.Label htmlFor={option.id}>{option.label}</S.Label>
          </S.Option>
        ))}
      </S.OptionsContainer>
    </S.Wrapper>
  );
}
