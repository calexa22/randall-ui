import React from "react";
import { render } from "@testing-library/react";
import { CalendarGrid } from ".";

test("renders CalendarGrid", () => {
  const { getByTestId } = render(<CalendarGrid />);
  const grid = getByTestId("calendar-grid");
  expect(grid).toBeInTheDocument();
});
