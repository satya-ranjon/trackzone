import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  padding: 1vh 1.5vh;
  margin: 2vh auto;
  outline: none;
  background-color: #0099ffce;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  color: #ffff;
  border: none;
  cursor: pointer;
  transition: all 0.4s;
  &:hover {
    background-color: #006eff;
  }
`;

export default Button;
