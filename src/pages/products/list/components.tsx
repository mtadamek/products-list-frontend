import styled from "styled-components";
import { Button, Spinner as MainSpinner } from "../components";

export const Container = styled.li`
  background-color: white;
  border-radius: 5px;
  margin-top: 10px;
  width: 800px;
  box-shadow: 0px 2px 2px #ddd;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.li`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RemoveButton = styled(Button)`
  margin-left: 5px;
  background-color: #f08080;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  padding-right: 8px;
`;

export const NameContainer = styled.div`
  padding: 15px 15px;
  width: 100%;
  cursor: pointer;
  &:active {
    opacity: 0.8;
  }
`;

export const Details = styled.div`
  font-size: small;
  border-top: solid;
  border-top-width: 2px;
  border-color: #efefef;
`;

export const DetailsTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const DetailsTd = styled.td`
  text-align: left;
  padding: 10px;
`;

export const DetailsTh = styled.th`
  border-bottom: 1px solid #efefef;
  text-align: left;
  padding: 10px;
`;

export const Spinner = styled(MainSpinner)`
  margin: 0px;
  border: 2px solid #fff8;
  border-top: 2px solid white;
  width: 15px;
  height: 15px;
  margin: 0px 9px;
`;
