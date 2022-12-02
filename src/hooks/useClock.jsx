import { addMinutes } from "date-fns";
import { useEffect, useState } from "react";
import { TIMEZONEOFFSET } from "../constants/timezone";

const useClock = (timezone, offset) => {
  const [localDate, setLocalDate] = useState(null);
  const [localOffset, setLocalOffset] = useState(0);
  const [localTimeZone, setLocalTimeZone] = useState("");
  const [utc, setUtc] = useState(null);

  useEffect(() => {
    let d = new Date();
    const localOf = d.getTimezoneOffset();
    d = addMinutes(d, localOf);
    setUtc(d);
    setLocalOffset(localOf);
  }, []);

  useEffect(() => {
    if (utc !== null) {
      if (timezone) {
        offset = TIMEZONEOFFSET[timezone] ?? offset;
        const newUtc = addMinutes(utc, offset);
        setLocalDate(newUtc);
      } else {
        const newUtc = addMinutes(utc, localOffset);
        const localZone = newUtc.toUTCString().split(" ").pop();
        setLocalDate(newUtc);
        setLocalTimeZone(localZone);
      }
    }
  }, [utc, timezone, offset]);

  return {
    date: localDate,
    dateUTC: utc,
    offset: offset || localOffset,
    timezone: timezone || localTimeZone,
  };
};

export default useClock;
