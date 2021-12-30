import React from "react";
import { Category } from "../../models/category";
import { Multiselect } from "./multiselect";
import * as Styled from "./styles";

export interface CategorySelectorProps {
    categories: Category[];
}

export const CategorySelector = ({ categories }: CategorySelectorProps) => {
  return (
    <Styled.Selector data-testid="category-selector">
      <Styled.Header>Select Categories</Styled.Header>
      <Multiselect categories={categories}></Multiselect>
    </Styled.Selector>
  );
};
