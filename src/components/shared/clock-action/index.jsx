import { useState } from "react";
import styled from "styled-components";
import ClockFrom from "../clock-form";

const Model = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #f0f8ffdd;
  display: flex;
  align-items: center;
  justify-content: center;
  .close {
    position: absolute;
    top: 10%;
    right: 10%;
    font-size: 5vh;
    cursor: pointer;
    color: #615d5da6;
    transition: all 0.9s;
    &:hover {
      color: red;
      transform: rotate(180deg);
    }
  }
`;

const ClockAction = ({
  clock,
  local = false,
  updateClock,
  createClock,
  deleteClock,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isCreate, setIsCreate] = useState(false);

  const handleModel = (value) => {
    if (isEdit) {
      return setIsEdit(value);
    } else {
      return setIsCreate(value);
    }
  };

  return (
    clock && (
      <div>
        <button onClick={() => setIsEdit((prv) => !prv)}>Edit</button>
        {local ? (
          <button onClick={() => setIsCreate((prv) => !prv)}>Create</button>
        ) : (
          <button onClick={() => deleteClock(clock)}>Delete</button>
        )}

        {isEdit && (
          <Model>
            <span className="close" onClick={() => setIsEdit((prv) => !prv)}>
              X
            </span>
            <ClockFrom
              value={clock}
              handelClock={updateClock}
              handleModel={handleModel}
              title={!local}
              edit={true}
              name="Edit Clock"
            />
          </Model>
        )}
        {isCreate && (
          <Model>
            <span className="close" onClick={() => setIsCreate((prv) => !prv)}>
              X
            </span>
            <ClockFrom
              handelClock={createClock}
              name="Create Clock"
              handleModel={handleModel}
            />
          </Model>
        )}
      </div>
    )
  );
};

export default ClockAction;
