import { Div } from "../ui/styledComponents";
import ClockListItem from "./ClockListItem";

export default function ClockList({ clockList, updateClock, deleteClock }) {
  return (
    <Div>
      <h1>Clock List</h1>
      {clockList.map((clock, index) => (
        <div key={index}>
          <ClockListItem
            clock={clock}
            updateClock={updateClock}
            deleteClock={deleteClock}
          />
        </div>
      ))}
    </Div>
  );
}
