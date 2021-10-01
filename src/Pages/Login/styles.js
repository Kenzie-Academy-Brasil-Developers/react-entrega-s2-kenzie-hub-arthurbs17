import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
`;

export const Content = styled.div`
  height: 250px;
  width: 240px;
  background: #fff;
  border: 3px solid #021ca5;
  border-radius: 5px;
  h1 {
    font-size: 1.5rem;
    color: #021ca5;
    background-color: #fff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  }
  div {
    background-color: #fff;
    button + button {
      margin-left: 1rem;
    }
  }
  span {
    background-color: #fff;
    color: red;
    font-size: 0.9rem;
  }
`;
