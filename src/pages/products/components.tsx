import styled from "styled-components";

export const MainContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background-color: white;
  padding: 15px 0px;
  font-size: large;
  box-shadow: 0px 2px 2px #ddd;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 5px;
  width: 100%;
  @media only screen and (min-width: 768px) {
    width: 768px;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0px;
  width: 100%;
  @media only screen and (min-width: 768px) {
    width: 768px;
  }
`;

export const Button = styled.button`
  background-color: #8fbc8f;
  border-radius: 5px;
  border: none;
  color: white;
  padding: 8px 12px;
  text-align: center;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: medium;
  cursor: pointer;
  &:active {
    opacity: 0.8;
  }
`;

export const Spinner = styled.div`
  margin: 30px;
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
