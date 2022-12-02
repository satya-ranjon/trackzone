import { useEffect } from "react";
import useClock from "../../hooks/useClock";
import ClockAction from "../shared/clock-action";
import ClockDiaplay from "../shared/clock-display";
import { Div } from "../ui/styledComponents";

const LocalClock = ({ clock, updateClock, createClock }) => {
  const { date, timezone, offset } = useClock(clock.timezone, clock.offset);

  useEffect(() => {
    updateClock({
      date,
      timezone,
      offset,
    });
  }, [date]);

  return (
    <Div>
      {date && (
        <ClockDiaplay
          date={date}
          title={clock.title == "" ? "Local Clock" : clock.title}
          timezone={timezone}
          offset={offset}
          width="100%"
        />
      )}

      <ClockAction
        local={true}
        clock={clock}
        updateClock={updateClock}
        createClock={createClock}
      />
    </Div>
  );
};
export default LocalClock;
