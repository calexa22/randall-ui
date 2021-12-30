import React, { Fragment } from "react";
import { Calendar } from "./components/calendar";
import { CategorySelector } from "./components/category-selector";
import { Category } from "./models/category";

const categories: Category[] = [
  {
    name: "Category 1",
  },
  {
    name: "Category 2",
  },
  {
    name: "Category 3",
  },
  {
    name: "Admin",
  },
  {
    name: "Development - Platform Enhancements",
  },
  {
    name: "Project Meetings - Platform Enhancements",
  },
  {
    name: "PTO/Sick/OOO",
  },
];

export const App = () => {
  const t = categories;
  return (
    <Fragment>
      <Calendar />
      <CategorySelector categories={t} />
    </Fragment>
  );
};
