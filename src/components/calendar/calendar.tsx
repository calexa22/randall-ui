import React, { useState } from "react";
import { CalendarGrid } from "./grid";
import { useCalendarDates } from "../../hooks";
import * as Styled from "./styles";
import { getMonthsForCalendar } from "../../utils";

export const Calendar = () => {
  const [month, setMonth] = useState(11);
  const [year, setYear] = useState(2021);

  const setupDates = (month: number, year: number): Date[] => {
    const firstOfTheMonth = new Date(year, month, 1);
    console.log(firstOfTheMonth);
    const monthDays: Date[] = [];
  
    let previousDay = new Date(firstOfTheMonth);
    previousDay.setDate(previousDay.getDate() - 1);
  
    do {
      monthDays.push(previousDay);
  
      previousDay = new Date(previousDay);
      previousDay.setDate(previousDay.getDate() - 1);
    } while (previousDay.getDay() !== 6);
  
    monthDays.reverse();
  
    let currentDay = firstOfTheMonth;
    while (currentDay.getMonth() === firstOfTheMonth.getMonth()) {
      monthDays.push(currentDay);
  
      currentDay = new Date(currentDay);
      currentDay.setDate(currentDay.getDate() + 1);
    }
  
    do {
      monthDays.push(currentDay);
  
      currentDay = new Date(currentDay);
      currentDay.setDate(currentDay.getDate() + 1);
    } while (currentDay.getDay() !== 0);
  
    return monthDays;
  };
  
  const getWeeks = (): Date[][] => {
    const dates = setupDates(month, year);
    const weeks: Date[][] = [];
    const numDaysInWeek = 7;

    for (let i = 0; i < dates.length; i += numDaysInWeek)
      weeks.push(dates.slice(i, i + numDaysInWeek));

    return weeks;
  };

  const getCalendarTitle = (): string => {
    const months = getMonthsForCalendar(month + 1);

    return `${months?.current.name} ${year}`;
  }

  return (
    <Styled.Calendar data-testid="calendar">
      <Styled.Header>{getCalendarTitle()}</Styled.Header>
      <CalendarGrid weeks={getWeeks()} />
    </Styled.Calendar>
  );
};
