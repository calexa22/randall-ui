import { useState } from "react";

export const useCalendarDates = (month: number, year: number) => {
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

  const [days] = useState(monthDays);

  return days;
};
