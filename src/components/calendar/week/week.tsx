import React from "react";
import { CalendarDay } from "../day";
import * as Styled from "./styles";

export interface CalendarWeekProps {
  sun: Date;
  mon: Date;
  tues: Date;
  wed: Date;
  thurs: Date;
  fri: Date;
  sat: Date;
}

export const CalendarWeek = ({
  sun,
  mon,
  tues,
  wed,
  thurs,
  fri,
  sat,
}: CalendarWeekProps) => {
  // const getMonths = () => {
  //   const currentMonth = new Date().getMonth();
  //   return getMonthsForCalendar(currentMonth);
  // };

  // console.log(getMonths());

  const getHeader = (): string => {
    const start = sun.toLocaleDateString("en-US");
    const end = sat.toLocaleDateString("en-US");
    return `${start} - ${end}`;
  };

  return (
    <Styled.Week data-testid="calendar-week">
      <Styled.Header>
        <h2>{getHeader()}</h2>
      </Styled.Header>
      <Styled.DayContainer>
        <CalendarDay date={sun}></CalendarDay>
        <CalendarDay date={mon}></CalendarDay>
        <CalendarDay date={tues}></CalendarDay>
        <CalendarDay date={wed}></CalendarDay>
        <CalendarDay date={thurs}></CalendarDay>
        <CalendarDay date={fri}></CalendarDay>
        <CalendarDay date={sat}></CalendarDay>
      </Styled.DayContainer>
    </Styled.Week>
  );
};
