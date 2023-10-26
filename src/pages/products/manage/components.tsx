import styled from "styled-components";
import { Spinner as MainSpinner } from "../components";

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media only screen and (min-width: 470px) {
    width: 450px;
  }
`;

export const InputContainer = styled.div`
  margin: 3px 0px 10px 0px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Input = styled.input`
  padding: 6px 10px;
  border-radius: 5px;
  border-width: 0px;
  box-shadow: 0px 2px 2px #ddd;
  font-size: small;
  float: left;
`;

export const Label = styled.label`
  padding: 0px 5px;
  @media only screen and (min-width: 470px) {
    padding: 0px;
  }
`;

export const ValidationError = styled.div`
  font-size: small;
  color: #f08080;
  margin-top: 2px;
`;

export const Select = styled.select`
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
