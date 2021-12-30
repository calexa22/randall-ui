import React from "react";
import { render } from "@testing-library/react";
import { CalendarWeek } from "./week";

test("renders CalendarWeek", () => {
  const { getByTestId } = render(<CalendarWeek />);
  const grid = getByTestId("calendar-week");
  expect(grid).toBeInTheDocument();
});
