import styled from "styled-components";

export const Header = styled.div`
  width: 100v;
  background-color: white;
  padding: 15px 30px 15px 30px;
  font-size: large;
  box-shadow: 0px 2px 2px #ddd;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.div`
  padding-inline: 10px;
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  padding: 10px 15px;
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  margin-top: 10px;
  width: 700px;
  box-shadow: 0px 2px 2px #ddd;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  background-color: #8fbc8f;
  border-radius: 5px;
  border: none;
  color: white;
  padding: 8px 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: medium;
  cursor: pointer;
  &:active {
    opacity: 0.8;
  }
`;

export const RemoveButton = styled(Button)`
  margin-left: 5px;
  background-color: #f08080;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Spinner = styled.div`
  margin: 20px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #8fbc8f;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
