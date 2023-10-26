import styled from "styled-components";
import { Spinner as MainSpinner } from "../components";

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 400px;
  margin: 3px 0px 10px 0px;
  padding: 6px 10px;
  border-radius: 5px;
  border-width: 0px;
  box-shadow: 0px 2px 2px #ddd;
  font-size: small;
`;

export const Select = styled.select`
  width: 420px;
  margin: 3px 0px 10px 0px;
  padding: 6px 10px;
  border-radius: 5px;
  border-width: 0px;
  box-shadow: 0px 2px 2px #ddd;
`;

export const Spinner = styled(MainSpinner)`
  margin: 0px;
  border: 2px solid #fff8;
  border-top: 2px solid white;
  width: 15px;
  height: 15px;
  margin: 0px 9px;
`;
