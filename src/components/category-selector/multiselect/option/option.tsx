import React from "react";
import { Category } from "../../../../models/category";
import * as Styled from "./styles";

export interface MultiselectOptionProps {
  index: number;
  category: Category;
  selected?: boolean;
  onOptionClicked: (index: number) => void;
}

export const MultiselectOption = ({
  index,
  category,
  selected,
  onOptionClicked,
}: MultiselectOptionProps) => {

  const onClick = () => {
    onOptionClicked(index);
  }

  return (
    <Styled.Option data-testid="muliselect-option" selected={selected}>
      <Styled.Button onClick={onClick}>{category.name}</Styled.Button>
    </Styled.Option>
  );
};
