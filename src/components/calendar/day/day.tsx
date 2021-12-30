import React from "react";
import { Day } from "../../../models";
import { getDayFromNumber } from "../../../utils";
import * as Styled from "./styles";

export interface CalendarDayProps {
  // day: Day;
  // isWeekend?: boolean;
  date: Date;
}

export const CalendarDay = ({ date }: CalendarDayProps) => {
  const day = getDayFromNumber(date.getDay());

  return (
    <Styled.Day data-testid="calendar-day">
      {`${day?.abbreviation} ${date.toLocaleDateString("en-US")}`}
    </Styled.Day>
  );
};
