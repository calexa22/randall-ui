import React from "react";
import { render } from "@testing-library/react";
import { Calendar } from ".";

test("renders Calendar", () => {
  const { getByTestId } = render(<Calendar />);
  const grid = getByTestId("calendar");
  expect(grid).toBeInTheDocument();
});
