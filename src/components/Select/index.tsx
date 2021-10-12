import { useCallback, useState, useRef, useEffect } from "react";
import Image from "next/image";
import useDisclosure from "hooks/useDisclosure";

import {
  GenericDropdown,
  GenericDropdownButton,
} from "components/GenericDropdown";

import ChevronDownIcon from "assets/icons/chevron-down.svg";

import * as S from "./styles";

export type SelectOption = {
  value: string;
  label: string;
};

export type SelectProps = {
  options: SelectOption[];
  selectId: string;
  onSelect?: (selectedOption: SelectOption) => void;
  defaultSelectedOptionValue?: string;
  placeholder?: string;
};

export function Select(props: SelectProps) {
  const { onSelect } = props;

  const { isOpen, handleToggle, handleClose } = useDisclosure();

  const [selectedOption, setSelectedOption] = useState<
    SelectOption | undefined
  >(
    props.defaultSelectedOptionValue
      ? props.options.find(
          ({ value: id }) => props.defaultSelectedOptionValue === id
        )
      : undefined
  );

  const selectedRef = useRef<HTMLDivElement>(null);

  const handleSelect = useCallback(
    (selectedOption: SelectOption) => {
      return () => {
        setSelectedOption(selectedOption);
        onSelect?.(selectedOption);
        handleToggle();
      };
    },
    [onSelect, handleToggle]
  );

  useEffect(() => {
    function clickOutside(event: MouseEvent) {
      if (
        !selectedRef.current ||
        selectedRef.current.contains(event.target as Node)
      )
        return;
      else handleClose();
    }

    window.addEventListener("click", clickOutside);
    return () => window.removeEventListener("click", clickOutside);
  }, [handleClose]);

  return (
    <GenericDropdown
      header={
        <S.Selected
          role="button"
          onClick={handleToggle}
          aria-label={`Click to show/hide options for ${props.selectId}`}
          ref={selectedRef}
        >
          <span>
            {selectedOption?.label || props.placeholder || "Selecione"}
          </span>
          <Image src={ChevronDownIcon} alt="" />
        </S.Selected>
      }
      shouldShowContent={isOpen}
    >
      {props.options.map((option) => (
        <GenericDropdownButton
          as="label"
          key={option.value}
          selected={option.value === selectedOption?.value}
        >
          <S.HiddenRadio
            id={`option-${props.selectId}-${option.value}`}
            name={props.selectId}
            value={option.value}
            checked={option.value === selectedOption?.value}
            className="sr-only"
            onChange={handleSelect(option)}
          />
          {option.label}
        </GenericDropdownButton>
      ))}
    </GenericDropdown>
  );
}
