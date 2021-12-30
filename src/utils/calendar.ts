import { Day, Month } from "../models/calendar";

const months: Month[] = [
  { number: 1, name: "January" },
  { number: 2, name: "February" },
  { number: 3, name: "March" },
  { number: 4, name: "April" },
  { number: 5, name: "May" },
  { number: 6, name: "June" },
  { number: 7, name: "July" },
  { number: 8, name: "August" },
  { number: 9, name: "September" },
  { number: 10, name: "October" },
  { number: 11, name: "November" },
  { number: 12, name: "December" },
];

const days: Day[] = [
  {
    number: 1,
    name: "Sunday",
    abbreviation: "Su",
  },
  {
    number: 2,
    name: "Monday",
    abbreviation: "M",
  },
  {
    number: 3,
    name: "Tuesday",
    abbreviation: "Tu",
  },
  {
    number: 4,
    name: "Wednesday",
    abbreviation: "W",
  },
  {
    number: 5,
    name: "Thursday",
    abbreviation: "Th",
  },
  {
    number: 6,
    name: "Friday",
    abbreviation: "F",
  },
  {
    number: 7,
    name: "Saturday",
    abbreviation: "Sa",
  },
];

export interface CalendarMonths {
  previous: Month;
  current: Month;
  future: Month;
}

export const getMonthsForCalendar = (num: number): CalendarMonths | null => {
  if (num < 1 || num > 12) return null;

  const prevNum = num === 1 ? 12 : num - 1;
  const futureNum = num === 12 ? 0 : num + 1;

  return {
    previous: months[prevNum - 1],
    current: months[num - 1],
    future: months[futureNum - 1],
  };
};

export const getDayFromNumber = (num: number): Day | null => {
  if (num < 0 || num > 6) return null;

  return days[num];
};
