import { TIMEZONEOFFSET } from "../constants/timezone";

export const getOffset = (start = -11.5, ending = 12) => {
  const offsets = [];
  for (let i = start; i <= ending; i += 0.5) {
    offsets.push(i);
  }
  return offsets;
};

export const getTimezone = () => {
  return ["UTC", "GMT", ...Object.keys(TIMEZONEOFFSET)];
};

export const generateId = () =>
  Math.random().toString(36).substring(2) + new Date().getTime().toString(36);
