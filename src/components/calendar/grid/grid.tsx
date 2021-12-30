import React from "react";
import { getMonthsForCalendar } from "../../../utils";
import { CalendarWeek } from "../week";
import * as Styled from "./styles";

export interface CalendarGridProps {
  weeks: Date[][];
}

export const CalendarGrid = ({ weeks }: CalendarGridProps) => {
  const getMonths = () => {
    const currentMonth = new Date().getMonth();
    return getMonthsForCalendar(currentMonth);
  };

  console.log(getMonths());

  return (
    <Styled.Grid data-testid="calendar-grid">
      {weeks.map((week, i) => (
        <CalendarWeek
          key={`calendar-week-${i}`}
          sun={week[0]}
          mon={week[1]}
          tues={week[2]}
          wed={week[3]}
          thurs={week[4]}
          fri={week[5]}
          sat={week[6]}
        />
      ))}
    </Styled.Grid>
  );
};
