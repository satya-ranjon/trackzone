import useClock from "../../hooks/useClock";
import ClockAction from "../shared/clock-action";
import ClockDiaplay from "../shared/clock-display";

const ClockListItem = ({ clock, updateClock, deleteClock }) => {
  const { date } = useClock(clock.timezone, clock.offset);

  if (!date) return null;
  return (
    <div>
      <ClockDiaplay date={date} title={clock.title} offset={clock.offset} />
      <ClockAction
        clock={clock}
        updateClock={updateClock}
        deleteClock={deleteClock}
      />
    </div>
  );
};

export default ClockListItem;
