import React, { useState } from "react";
import { MultiselectOption } from "./option";
import { Category } from "../../../models/category";
import * as Styled from "./styles";

export interface MultiselectProps {
  categories: Category[];
  onClearSelections?: () => void;
}

export const Multiselect = ({
  categories,
  onClearSelections,
}: MultiselectProps) => {
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);

  const onOptionClicked = (index: number): void => {
    let newIndices: number[] = [];

    if (selectedIndices.indexOf(index) === -1) {
      newIndices.push(index);

      for (const i of selectedIndices) {
        newIndices.push(i);
      }
    } else {
      newIndices = selectedIndices.filter((i) => i !== index);
    }

    setSelectedIndices(newIndices);
  };

  const unselectedIndices: number[] = [];

  for (let i = 0; i < categories.length; i++)
    if (selectedIndices.indexOf(i) === -1) unselectedIndices.push(i);

  return (
    <Styled.Multiselect data-testid="multiselect">
      {selectedIndices.map((catIndex, i) => (
        <MultiselectOption
          key={`selected-${i}`}
          index={catIndex}
          category={categories[catIndex]}
          onOptionClicked={onOptionClicked}
          selected
        />
      ))}
      {unselectedIndices.map((catIndex, i) => (
        <MultiselectOption
          key={`unselected-${i}`}
          index={catIndex}
          category={categories[catIndex]}
          onOptionClicked={onOptionClicked}
        />
      ))}
    </Styled.Multiselect>
  );
};
