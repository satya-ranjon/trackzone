import { useState } from "react";
import styled from "styled-components";
import { getOffset, getTimezone } from "../../../utils/timezone";
import Button from "../../ui/Button";

const Form = styled.form`
  width: 500px;
  display: block;
  padding: 2vh;
  border: 1px solid #63626271;
  select,
  input {
    width: 100%;
    padding: 1vh 0;
    font-size: 18px;
    border: 1px solid #63626271;
    outline: none;
  }
  label {
    font-size: 18px;
    font-weight: 500;
    display: block;
    margin: 1vh 0vh;
  }
`;

const ClockFrom = ({
  value = { title: "", timezone: "GMT", offset: 0 },
  handelClock,
  handleModel,
  title = true,
  edit = false,
  name,
}) => {
  const [formValue, setFormValue] = useState({ ...value });

  const handleChange = (e) => {
    let { value, name } = e.target;

    if (name == "offset") {
      value = Number(value) * 60;
    }
    setFormValue((prv) => ({
      ...prv,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handelClock(formValue);
    handleModel((prv) => !prv);
  };

  return (
    <Form action="" onSubmit={handleSubmit}>
      <h1>{name}</h1>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={formValue.title}
          onChange={handleChange}
          disabled={!title}
        />
      </div>
      <div>
        <label htmlFor="timezone">Time Zone</label>
        <select
          name="timezone"
          id="timezone"
          value={formValue.timezone}
          onChange={handleChange}>
          {getTimezone().map((timezone) => (
            <option value={timezone} key={timezone}>
              {timezone}
            </option>
          ))}
        </select>
      </div>
      {(formValue.timezone == "GMT" || formValue.timezone == "UTC") && (
        <div>
          <label htmlFor="offset">Offset</label>
          <select
            name="offset"
            id="offset"
            value={formValue.offset / 60}
            onChange={handleChange}>
            {getOffset().map((offset) => (
              <option value={offset} key={offset}>
                {offset}
              </option>
            ))}
          </select>
        </div>
      )}

      <Button type="submit">{edit ? "Update" : "Create"}</Button>
    </Form>
  );
};

export default ClockFrom;
