import React from "react";
import { render } from "@testing-library/react";
import { CalendarDay, CalendarDayProps } from "./day";

test("renders CalendarDay", () => {
  const props: CalendarDayProps = {
    day: {
      number: 1,
      name: "Sunday",
      abbreviation: "Sun",
    },
    isWeekend: true,
  };

  const { getByTestId } = render(
    <CalendarDay day={props.day} isWeekend={props.isWeekend} />
  );
  const grid = getByTestId("calendar-day");
  expect(grid).toBeInTheDocument();
});
