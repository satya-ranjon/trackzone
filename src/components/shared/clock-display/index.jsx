import { format } from "date-fns";
import styled from "styled-components";

const Div = styled.div`
  padding: 1vh;
  border: 1.5px solid #575757;
  margin: 1vh 0;
  max-width: ${(props) => props.width ?? "300px"};
  text-align: center;
`;

const ClockDiaplay = ({ date, title, timezone, offset, width }) => {
  return (
    <Div width={width}>
      <h1>Title : {title}</h1>
      <p>
        Time Zone : {timezone} |{" "}
        {offset / 60 > 0
          ? `+${Math.abs(offset / 60)}`
          : `-${Math.abs(offset / 60)}`}
      </p>
      <p> {format(date, "yyyy-MM-dd hh:mm:ss aaaaa'm'")}</p>
    </Div>
  );
};

export default ClockDiaplay;
