import { useState } from "react";
import ClockList from "./components/clock-list";
import LocalClock from "./components/local-clock";
import { generateId } from "./utils/timezone";

const inatialData = {
  title: "local Clock",
  date: null,
  timezone: "",
  offset: null,
};

export default function App() {
  const [localClock, setLocalClock] = useState({ ...inatialData });
  const [clockList, setClockList] = useState([]);

  const updateLocalClock = (date) => {
    setLocalClock({
      ...localClock,
      ...date,
    });
  };

  const createClock = (clock) => {
    clock.id = generateId();
    setClockList((prv) => [...prv, clock]);
  };

  const updateCreateClock = (clock_data) => {
    const updateData = clockList.map((clock) =>
      clock.id === clock_data.id ? clock_data : clock
    );
    setClockList(updateData);
  };

  const deleteClock = (delete_clock) => {
    const deleteClock = clockList.filter(
      (clock) => clock.id !== delete_clock.id
    );
    setClockList(deleteClock);
  };

  return (
    <div>
      <LocalClock
        clock={localClock}
        updateClock={updateLocalClock}
        createClock={createClock}
      />
      <ClockList
        clockList={clockList}
        updateClock={updateCreateClock}
        deleteClock={deleteClock}
      />
    </div>
  );
}
